import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
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

export interface BillAction {
  date: string
  description?: string
  // 參眾議院
  chamber: ChamberEnum
}

interface BillArgs {
  id?: string
  title?: string
  sponsor?: People
  cosponsors?: BillCosponsor[]
  categories?: string[]
  tags?: string[]
  status?: BillStatusEnum
  actions?: BillAction[]
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

  // 法案動作
  actions: BillAction[] = []
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
    if (isArray(bill.actions)) {
      this.actions = bill.actions.map((action) => ({
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
    return this.actions?.[0]?.date
  }

  /**
   * Get the latest action of the bill
   * @returns The latest action
   */
  get latestAction() {
    return this.actions?.[this.actions.length - 1]
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

  get chamberPrefix(): string {
    return this.latestAction?.chamber === ChamberEnum.HOUSE
      ? 'H.R.'
      : this.latestAction?.chamber === ChamberEnum.SENATE
        ? 'S.'
        : ''
  }

  get cosponsorsCount() {
    return (this.cosponsors ?? []).length
  }

  /**
   * Check if the bill has passed both chambers
   * @returns true if the bill has passed both House and Senate
   */
  hasPassedBothChambers(): boolean {
    const hasPassedHouse = (this.actions ?? []).some(
      (action) =>
        action.chamber === ChamberEnum.HOUSE &&
        action.description?.includes('Passed')
    )
    const hasPassedSenate = (this.actions ?? []).some(
      (action) =>
        action.chamber === ChamberEnum.SENATE &&
        action.description?.includes('Passed')
    )
    return hasPassedHouse && hasPassedSenate
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
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? undefined,
      sponsor: dto.sponsor?.people
        ? People.fromDTO(lang, dto.sponsor.people)
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
      // TODO: 型態待補
      actions:
        (
          dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.actionsAll as
            | {
                actionAt: {
                  datetime: string
                }
                description: string
                chamber: 'house' | 'senate'
              }[]
            | undefined
        )
          ?.map((action) => ({
            date: action.actionAt.datetime,
            description: action.description,
            chamber:
              action.chamber === 'house'
                ? ChamberEnum.HOUSE
                : ChamberEnum.SENATE,
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
