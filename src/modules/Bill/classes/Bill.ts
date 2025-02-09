import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { People } from '@/modules/People/classes/People'
import { isArray, isNull, isNumber, isString, isUndefined } from 'lodash-es'
import { ROUTES } from '@/routes'
import {
  Bill_StatusTracker as BillStatusTracker,
  Bill as BillDTO,
  CategoriesBills,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import dayjs, { Dayjs } from 'dayjs'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { Party } from '@/common/enums/Party'
import TagUtils from '@/modules/Common/Tag.utils'
import { BillCosponsor } from '@/modules/People/classes/BillCosponsor'
import { BillTypeEnum } from '@/modules/Bill/components/BillFilter/enums'
import { z } from 'zod'
import { ChamberEnum } from '@/common/enums/Chamber'

// FIXME: 若後端有固定格式則改用實際的 Dto
interface BillActionOverviewDto {
  actionAt: {
    datetime: string
  }
  description: string
}

interface BillActionAllDto extends BillActionOverviewDto {
  chamber: 'house' | 'senate'
}

export interface BillAction {
  date: string
  description?: string
  // 參眾議院
  chamber?: ChamberEnum
}

interface BillArgs {
  id?: string
  type?: BillTypeEnum
  title?: string
  sponsor?: People
  cosponsors?: BillCosponsor[]
  categories?: string[]
  tags?: string[]
  status?: BillStatusEnum
  actionsOverview?: BillAction[]
  actionsAll?: BillAction[]
  congressNumber?: number
  statusTracker?: BillStatusTracker
  introducedAt?: string
  latestActionAt?: string
  number?: string
  summary?: string
  rawData?: BillDTO
  congressGovUrl?: string
}

export class Bill {
  // ID
  id?: string
  // 法案類型
  type?: BillTypeEnum
  // 法案名稱
  title?: string
  // 提案人
  sponsor?: People
  // 共同提案人
  cosponsors: BillCosponsor[] = []
  // 類別
  categories?: string[]
  // 標籤
  tags: string[] = []
  // 法案狀態
  status?: BillStatusEnum
  // 法案狀態追蹤
  statusTracker?: {
    currentStatus?: BillStatusEnum
    passedStatus?: BillStatusEnum[]
    futureStatus?: BillStatusEnum[]
  }

  // 法案動作 overview
  actionsOverview: BillAction[] = []
  // 法案動作 all
  actionsAll: BillAction[] = []
  // 國會屆數
  congressNumber?: number
  // 法案發起日期
  introducedAt?: Dayjs
  // 法案最後動作日期
  latestActionAt?: Dayjs
  // 法案編號
  number?: string
  // Summary
  summary?: string
  // Raw Data
  rawData?: BillDTO
  // congress.gov 的法案頁面
  congressGovUrl?: string

  constructor(private readonly bill: BillArgs) {
    if (isString(bill.id)) {
      this.id = bill.id
    }
    if (isString(bill.title)) {
      this.title = bill.title
    }
    if (isString(bill.type)) {
      this.type = bill.type
    }
    if (bill.sponsor instanceof People) {
      this.sponsor = bill.sponsor
    }
    if (isArray(bill.cosponsors)) {
      this.cosponsors = bill.cosponsors
    }
    if (isArray(bill.categories)) {
      this.categories = bill.categories
    }
    if (isArray(bill.tags)) {
      this.tags = bill.tags
    }
    if (isArray(bill.actionsOverview)) {
      this.actionsOverview = bill.actionsOverview.map((action) => ({
        date: action.date,
        description: action.description,
      }))
    }
    if (isArray(bill.actionsAll)) {
      this.actionsAll = bill.actionsAll.map((action) => ({
        date: action.date,
        description: action.description,
        chamber: action.chamber,
      }))
    }
    if (isNumber(bill.congressNumber)) {
      this.congressNumber = bill.congressNumber
    }
    if (bill.statusTracker) {
      this.statusTracker = {
        currentStatus: bill.statusTracker.currentStep ?? undefined,
        passedStatus: bill.statusTracker.passedSteps ?? [],
        futureStatus: bill.statusTracker.futureSteps ?? [],
      } as unknown as {
        currentStatus?: BillStatusEnum
        passedStatus?: BillStatusEnum[]
        futureStatus?: BillStatusEnum[]
      }
    }
    if (isString(bill.introducedAt) && dayjs(bill.introducedAt).isValid()) {
      this.introducedAt = dayjs(bill.introducedAt)
    }
    if (isString(bill.latestActionAt) && dayjs(bill.latestActionAt).isValid()) {
      this.latestActionAt = dayjs(bill.latestActionAt)
    }
    if (isString(bill.number)) {
      this.number = bill.number
    }
    if (isString(bill.summary)) {
      this.summary = bill.summary
    }
    if (!isUndefined(bill.rawData)) {
      this.rawData = bill.rawData
    }
    if (isString(bill.congressGovUrl)) {
      this.congressGovUrl = bill.congressGovUrl
    }
  }

  get link() {
    return `${ROUTES.BILL}/${this.id}`
  }

  get introducedDate() {
    return this.actionsOverview?.[0]?.date
  }

  /**
   * Get the latest action of the bill
   * @returns The latest action
   */
  get latestAction() {
    return this.actionsOverview?.[this.actionsOverview.length - 1]
  }

  /**
   * Get the index of the bill status
   * @returns The index of the bill status
   */
  static getStatusIndex(bill: Bill) {
    if (!bill.statusTracker?.passedStatus?.length) {
      return 0
    }
    return bill.statusTracker.passedStatus.length - 1
  }

  static billTypeEnumTextMap: Record<BillTypeEnum, string> = {
    [BillTypeEnum.HouseBill]: 'H.R.',
    [BillTypeEnum.SenateBill]: 'S.',
    [BillTypeEnum.HouseJointResolution]: 'H.J.Res.',
    [BillTypeEnum.SenateJointResolution]: 'S.J.Res.',
    [BillTypeEnum.HouseConcurrentResolution]: 'H.Con.Res.',
    [BillTypeEnum.SenateConcurrentResolution]: 'S.Con.Res.',
    [BillTypeEnum.HouseSimpleResolution]: 'H.Res.',
    [BillTypeEnum.SenateSimpleResolution]: 'S.Res.',
  }

  get chamberPrefix(): string {
    return Bill.billTypeEnumTextMap[this.type as BillTypeEnum] ?? ''
  }

  get cosponsorsCount() {
    return (this.cosponsors ?? []).length
  }

  static GetBillStatusText(status: BillStatusEnum): string {
    switch (status) {
      case BillStatusEnum.BECOME_LAW:
        return 'Become Law'
      case BillStatusEnum.TO_PRESIDENT:
        return 'To President'
      case BillStatusEnum.PASSED_SENATE:
        return 'Passed Senate'
      case BillStatusEnum.PASSED_HOUSE:
        return 'Passed House'
      case BillStatusEnum.INTRODUCED:
        return 'Introduced'
      case BillStatusEnum.AGREED_TO_IN_HOUSE:
        return 'Agreed to in House'
      case BillStatusEnum.AGREED_TO_IN_SENATE:
        return 'Agreed to in Senate'
      case BillStatusEnum.FAILED_HOUSE:
        return 'Failed in House'
      case BillStatusEnum.FAILED_SENATE:
        return 'Failed in Senate'
      case BillStatusEnum.FAILED_TO_PASS_OVER_VETO:
        return 'Failed to Pass Over Veto'
      case BillStatusEnum.PASSED_OVER_VETO:
        return 'Passed Over Veto'
      case BillStatusEnum.POCKET_VETOED_BY_PRESIDENT:
        return 'Pocket Vetoed by President'
      case BillStatusEnum.RESOLVING_DIFFERENCES:
        return 'Resolving Differences'
      case BillStatusEnum.VETOED_BY_PRESIDENT:
        return 'Vetoed by President'
      default:
        return 'Unknown'
    }
  }

  static fromDTO(lang: Language, dto: BillDTO) {
    return new Bill({
      id: dto.id ?? undefined,
      type: dto.type
        ? z.nativeEnum(BillTypeEnum).safeParse(dto.type).data
        : undefined,
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? undefined,
      sponsor: dto.sponsor?.people
        ? People.fromDTO(lang, {
            ...dto.sponsor.people,
            currentParty: dto.sponsor.party, // 提案當下的政黨
          })
        : undefined,
      cosponsors:
        dto.cosponsors
          ?.map((cosponsor) =>
            cosponsor.people ? BillCosponsor.fromDto(lang, cosponsor) : null
          )
          .filter((cosponsor) => !isNull(cosponsor)) ?? [],
      categories:
        dto.categories
          ?.map(
            (category) =>
              category.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name
          )
          .filter((name) => isString(name)) ?? [],
      tags:
        dto.tags
          ?.map((tag) => TagUtils.parseTagName(lang, tag))
          .filter((name) => isString(name)) ?? [],
      statusTracker: dto.statusTracker ?? undefined,
      congressNumber: dto.congress,
      actionsOverview:
        (
          dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.actionsOverview as
            | BillActionOverviewDto[]
            | undefined
        )
          ?.map((action) => ({
            date: action.actionAt.datetime,
            description: action.description,
          }))
          ?.sort((a, b) => dayjs(a.date).diff(dayjs(b.date))) ?? [],
      actionsAll:
        (
          dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.actionsAll as
            | BillActionAllDto[]
            | undefined
        )
          ?.map((action) => ({
            date: action.actionAt.datetime,
            description: action.description,
            chamber: z.nativeEnum(ChamberEnum).safeParse(action.chamber).data,
          }))
          ?.sort((a, b) => dayjs(a.date).diff(dayjs(b.date))) ?? [],
      introducedAt: dto.introducedAt?.datetime,
      latestActionAt: dto.latestActionTime,
      number: dto.number,
      summary: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.summary ?? '',
      rawData: dto,
      congressGovUrl: dto.congressGovUrl ?? '',
    })
  }

  static parseCategoriesBills(
    dto: CategoriesBills,
    lang: Language
  ): Array<{
    id: string
    name: string
  }> {
    return (
      dto?.docs
        ?.filter((doc) => !isNull(doc))
        ?.map((doc) => ({
          id: doc.id ?? '',
          name: doc.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? '',
        })) ?? []
    )
  }

  static getAllBillStatuses(bill: Bill): BillStatusEnum[] {
    return [
      ...(bill.statusTracker?.passedStatus ?? []),
      ...(bill.statusTracker?.futureStatus ?? []),
    ]
  }

  static getCosponsorsParliamentData(bill: Bill): ParliamentChartData[] {
    const parliamentMap = bill.cosponsors.reduce<Record<Party, number>>(
      (acc, curr) => {
        const people = curr.people
        if (!people) return acc

        const party = people.party
        if (!party) return acc

        acc[party] += 1
        return acc
      },
      {
        [Party.DEMOCRATIC]: 0,
        [Party.REPUBLICAN]: 0,
        [Party.INDEPENDENT]: 0,
      }
    )

    return Object.entries(parliamentMap).map(([party, count]) => ({
      party: party as Party,
      count,
    }))
  }

  static getRelatedBills(dto: BillDTO, lang: Language): Bill[] {
    return dto.relatedBills?.map((bill) => Bill.fromDTO(lang, bill)) ?? []
  }
}
