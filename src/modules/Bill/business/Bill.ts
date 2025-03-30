import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { isArray, isNull, isString, isUndefined } from 'lodash-es'
import { ROUTES } from '@/routes'
import { Bill as ApiBill } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import dayjs from 'dayjs'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { Party } from '@/common/enums/Party'
import TagUtils, { tagSchema } from '@/modules/Common/business/Tag'
import { BillTypeEnum } from '@/modules/Bill/components/BillFilter/enums'
import { z } from 'zod'
import { ChamberEnum } from '@/common/enums/Chamber'
import { peopleSchema, PeopleUtils } from '@/modules/People/business/People'
import {
  billCosponsorSchema,
  BillCosponsorUtils,
} from '@/modules/People/business/BillCosponsor'

interface BillActionOverviewDto {
  actionAt: {
    datetime: string
  }
  description: string
}

interface BillActionAllDto extends BillActionOverviewDto {
  chamber: 'house' | 'senate'
}

const billActionSchema = z.object({
  date: z.string().optional(),
  description: z.string().optional(),
  chamber: z.nativeEnum(ChamberEnum).optional(),
})
export type BillAction = z.infer<typeof billActionSchema>

export const billSchema = z.object({
  id: z.string().optional(),
  type: z.nativeEnum(BillTypeEnum).optional(),
  title: z.string().optional(),
  sponsor: peopleSchema.optional(),
  cosponsors: z.array(billCosponsorSchema),
  categories: z.array(z.string()),
  tags: z.array(tagSchema),
  status: z.nativeEnum(BillStatusEnum).optional(),
  statusTracker: z
    .object({
      currentStatus: z.nativeEnum(BillStatusEnum).optional(),
      passedStatus: z.array(z.nativeEnum(BillStatusEnum)).optional(),
      futureStatus: z.array(z.nativeEnum(BillStatusEnum)).optional(),
    })
    .optional(),
  actionsOverview: z.array(billActionSchema),
  actionsAll: z.array(billActionSchema),
  congressNumber: z.number().optional(),
  introducedAt: z.string().optional(),
  latestActionAt: z.string().optional(),
  number: z.string().optional(),
  summary: z.string().optional(),
  congressGovUrl: z.string().optional(),
})

export type Bill = z.infer<typeof billSchema>

export class BillUtils {
  static parse(lang: Language, dto: ApiBill) {
    return billSchema.parse({
      id: dto.id ?? undefined,
      type: dto.type
        ? z.nativeEnum(BillTypeEnum).safeParse(dto.type).data
        : undefined,
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? undefined,
      sponsor: dto.sponsor?.people
        ? PeopleUtils.parse(lang, dto.sponsor.people)
        : undefined,
      cosponsors:
        dto.cosponsors
          ?.map((cosponsor) =>
            cosponsor.people ? BillCosponsorUtils.parse(lang, cosponsor) : null
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
          ?.map((tag) => TagUtils.parse(lang, tag))
          .filter((tag) => !isUndefined(tag.id) && !isUndefined(tag.name)) ??
        [],
      // Avoid __typename
      statusTracker: dto.statusTracker
        ? {
            currentStatus: dto.statusTracker.currentStep,
            passedStatus: dto.statusTracker.passedSteps,
            futureStatus: dto.statusTracker.futureSteps,
          }
        : undefined,
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
      congressGovUrl: dto.congressGovUrl ?? '',
    })
  }

  /**
   * 解析所有法案狀態
   * @param bill
   * @returns
   */
  static getAllBillStatuses(bill: Bill): BillStatusEnum[] {
    return [
      ...(bill.statusTracker?.passedStatus ?? []),
      ...(bill.statusTracker?.futureStatus ?? []),
    ]
  }

  /**
   * 解析共同提案人議會資料
   * @param bill
   * @returns
   */
  static getCosponsorsParliamentData(bill: Bill): ParliamentChartData[] {
    if (!isArray(bill.cosponsors)) return []

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

    return Object.entries(parliamentMap)
      .map(([party, count]) => ({
        party: party as Party,
        count,
      }))
      .sort((a, b) => b.count - a.count)
  }

  static getLink(bill: Bill) {
    return `${ROUTES.BILL}/${bill.id}`
  }

  static getIntroducedDate(bill: Bill) {
    return bill.actionsOverview[0]?.date
  }

  /**
   * Get the latest action of the bill
   * @returns The latest action
   */
  static getLatestAction(bill: Bill) {
    return (
      bill.actionsOverview[bill.actionsOverview.length - 1] ?? {
        description: undefined,
        date: undefined,
        chamber: undefined,
      }
    )
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

  static getChamberPrefix(bill: Bill): string {
    return BillUtils.billTypeEnumTextMap[bill.type as BillTypeEnum] ?? ''
  }

  static getCosponsorsCount(bill: Bill) {
    return (bill.cosponsors ?? []).length
  }
}
