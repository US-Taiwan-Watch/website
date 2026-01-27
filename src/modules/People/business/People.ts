import { Party } from '@/common/enums/Party'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import {
  isArray,
  isNumber,
  isString,
  min,
  uniq,
  max,
  isUndefined,
} from 'lodash-es'
import { People as ApiPeople } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'
import {
  taiwanRecordSchema,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import TagUtils, { tagSchema } from '@/modules/Common/business/Tag'
import { DateUtils } from '@/modules/Common/business/Date'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

const congressExperienceRangeSchema = z.object({
  earliestCongress: z.number().optional(),
  latestCongress: z.number().optional(),
  earliestCongressYear: z.number().optional(),
  latestCongressYear: z.number().optional(),
})
export type CongressExperienceRange = z.infer<
  typeof congressExperienceRangeSchema
>

const partyExperienceSchema = z.object({
  party: z.nativeEnum(Party),
  start: z.string().optional(),
  end: z.string().optional(),
})
type PartyExperience = z.infer<typeof partyExperienceSchema>

const experienceSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  descriptions: z.array(z.string()).optional(),
  isCurrent: z.boolean().optional(),
})
type Experience = z.infer<typeof experienceSchema>

export const peopleSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  party: z.nativeEnum(Party).optional(),
  position: z.nativeEnum(PeoplePosition).optional(),
  positions: z.array(z.nativeEnum(PeoplePosition)),
  tags: z.array(tagSchema),
  partyExperience: z.array(partyExperienceSchema),
  experience: z.array(
    experienceSchema.extend({
      experience: z.array(experienceSchema).optional(),
    })
  ),
  publications: z.array(
    z.object({
      id: z.string().optional(),
      title: z.string().optional(),
      abstract: z.string().optional(),
      link: z.string().optional(),
    })
  ),
  bioByAI: z.string().optional(),
  committees: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      systemCode: z.string().optional(),
      title: z.string().optional(),
      subcommittees: z
        .array(
          z.object({
            id: z.string().optional(),
            name: z.string().optional(),
            systemCode: z.string().optional(),
            title: z.string().optional(),
          })
        )
        .optional(),
    })
  ),
  isCurrentCongressMember: z.boolean().optional(),
  taiwanRecords: z.array(taiwanRecordSchema),
  govTrackId: z.string().optional(),
  links: z.array(
    z.object({
      id: z.string().optional(),
      link: z.string().optional(),
      title: z.string().optional(),
      type: z
        .enum([
          'facebook',
          'instagram',
          'openSecrets',
          'other',
          'twitter',
          'youtube',
        ])
        .optional(),
    })
  ),
  billCount: z.number().optional(),
  sponsoredBillCount: z.number().optional(),
  cosponsoredBillCount: z.number().optional(),
  votingRecordCount: z.number().optional(),
  congressExperienceRange: congressExperienceRangeSchema.optional(),
})

export type People = z.infer<typeof peopleSchema>

export class PeopleUtils {
  static parse(lang: Language, dto: ApiPeople) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return peopleSchema.parse({
      id: dto.id ?? undefined,
      name:
        dto.i18n?.[apiLang]?.displayName ||
        dto.i18n?.[fallbackLang]?.displayName ||
        undefined,
      image: dto.photo?.url,
      description:
        dto.i18n?.[apiLang]?.bio || dto.i18n?.[fallbackLang]?.bio || '',
      party: CommonUtils.parseAPIParty(dto?.currentParty),
      position: PeopleUtils.parseCurrentPosition(dto.experiences),
      positions: PeopleUtils.parsePositions(dto.experiences),
      tags:
        dto.tags
          ?.map((tag) => TagUtils.parse(lang, tag))
          .filter((tag) => !isUndefined(tag.id) && !isUndefined(tag.name)) ??
        [],
      partyExperience: PeopleUtils.parsePartyExperience(dto.partyChangeRecords),
      experience: PeopleUtils.parseExperience(dto.experiences),
      publications:
        dto.publications?.map((publication) => ({
          id: publication.id ?? undefined,
          title: publication.title ?? undefined,
          abstract: publication.abstract ?? undefined,
          link: publication.link ?? undefined,
        })) ?? [],
      bioByAI: dto.i18n?.[apiLang]?.bio || dto.i18n?.[fallbackLang]?.bio || '',
      committees:
        dto.congressionalData?.committees?.map((committee) => ({
          id: committee.id ?? undefined,
          name: committee.name ?? undefined,
          systemCode: committee.systemCode ?? undefined,
          title: committee.title ?? undefined,
          subcommittees:
            committee.subcommittees?.map((subcommittee) => ({
              id: subcommittee.id ?? undefined,
              name: subcommittee.name ?? undefined,
              systemCode: subcommittee.systemCode ?? undefined,
              title: subcommittee.title ?? undefined,
            })) ?? [],
        })) ?? [],
      isCurrentCongressMember: PeopleUtils.parseIsCurrentCongressMember(
        dto.experiences
      ),
      taiwanRecords: PeopleUtils.parseTaiwanRecord(dto.records),
      govTrackId: dto.govTrackId ?? undefined,
      links: dto.links ?? [],
      billCount: dto.billCount ?? 0,
      sponsoredBillCount: dto.sponsorBills?.length ?? 0,
      cosponsoredBillCount: dto.cosponsorBills?.length ?? 0,
      votingRecordCount: dto.votes?.length ?? 0,
      congressExperienceRange:
        PeopleUtils.getCongressExperienceRange(dto.experiences) ?? undefined,
    })
  }

  /**
   * People link
   */
  static getLink(peopleId: People['id']) {
    if (!peopleId) return '#'
    const { resolveRouteUrl } = getURouterServer()
    return resolveRouteUrl({
      name: RouteName.PeopleDetail,
      params: { peopleId },
    })
  }

  /**
   * Calculate two dayjs instances to years and months
   * e.x. 2022-01-01 ~ 2023-06-01 => 1 yr 5 mo
   * @param experience
   * @returns
   */
  static calculateExperienceDuration(experience: Experience | PartyExperience) {
    const start = DateUtils.parseLocal(experience.start)
    const end = DateUtils.parseLocal(experience.end)
    if (!start || !end)
      return {
        year: 0,
        month: 0,
      }

    return {
      year: end.diff(start, 'year') ?? 0,
      month: (end.diff(start, 'month') ?? 0) % 12,
    }
  }

  // Nov 2022
  static ExperienceTimeFormat = 'MMM YYYY'

  /**
   * Transform party experience
   * @param partyExperience
   * @returns
   */
  static parsePartyExperience(
    partyChangeRecords: ApiPeople['partyChangeRecords']
  ) {
    if (!isArray(partyChangeRecords)) return []

    const partyExperience: People['partyExperience'] = []
    for (let i = 0; i < partyChangeRecords.length; i++) {
      const item = partyChangeRecords[i]
      if (!isString(item.newParty)) continue
      const party = CommonUtils.parseAPIParty(item.newParty)
      if (!party) continue
      partyExperience.push({
        party,
        start: item.changedAt?.datetime ?? undefined,
        end: partyChangeRecords[i + 1]?.changedAt?.datetime ?? undefined,
      })
    }

    return partyExperience
  }

  /**
   * Transform experience
   * @param experience
   * @returns
   */
  static parseExperience(apiExperiences: ApiPeople['experiences']) {
    if (!isArray(apiExperiences)) return []

    const experiences: People['experience'] = []
    for (let i = 0; i < apiExperiences.length; i++) {
      const item = apiExperiences[i]
      const positions = item.positions
      if (!isArray(positions)) continue
      if (positions.length === 1) {
        experiences.push({
          title: item.company ?? '',
          subtitle: positions[0].title ?? '',
          start: positions[0].start?.datetime ?? undefined,
          end: positions[0].end?.datetime ?? undefined,
          descriptions: positions[0].description
            ? [positions[0].description]
            : [],
          isCurrent: !!item.isCurrent,
        })
      } else {
        experiences.push({
          title: item.company ?? '',
          experience: [...positions]
            .sort((a, b) => {
              const aEnd = DateUtils.safeParseLocal(a.end?.datetime)
              const bEnd = DateUtils.safeParseLocal(b.end?.datetime)
              if (aEnd.isBefore(bEnd)) {
                return 1
              } else if (aEnd.isAfter(bEnd)) {
                return -1
              } else {
                return 0
              }
            })
            .map((position) => ({
              title: position.title ?? '',
              start: position.start?.datetime ?? undefined,
              end: position.end?.datetime ?? undefined,
              descriptions: position.description ? [position.description] : [],
            })),
          isCurrent: !!item.isCurrent,
        })
      }
    }

    return experiences
  }

  /**
   * 解析目前擔任的職位
   * @param dto
   * @returns
   */
  static parseCurrentPosition(dto: ApiPeople['experiences']) {
    if (!isArray(dto)) return undefined
    const currentExperience = dto.find((item) => item.isCurrent)
    if (
      !currentExperience ||
      !isString(currentExperience.category?.i18n?.en?.name)
    )
      return undefined
    return z
      .nativeEnum(PeoplePosition)
      .safeParse(currentExperience.category?.i18n?.en?.name).data
  }

  /**
   * 解析過去曾經擔任過的職位
   * @param dto
   * @returns
   */
  static parsePositions(dto: ApiPeople['experiences']) {
    if (!isArray(dto)) return []
    return uniq(
      dto
        .map(
          (item) =>
            z
              .nativeEnum(PeoplePosition)
              .safeParse(item.category?.i18n?.en?.name).data
        )
        .filter(Boolean)
    ) as Array<PeoplePosition>
  }

  /**
   * 解析台灣紀錄
   * @param dto
   * @returns
   */
  static parseTaiwanRecord(dto: ApiPeople['records']) {
    if (!isArray(dto)) return []
    return dto.map((item) => TaiwanRecordUtils.parse(item))
  }

  /**
   * 解析是否為現任國會議員
   * @param dto
   * @returns
   */
  static parseIsCurrentCongressMember(dto: ApiPeople['experiences']) {
    if (!isArray(dto)) return false
    const currentExperience = dto.find(
      (item) =>
        item.isCurrent &&
        (item.category?.i18n?.en?.name === PeoplePosition.SENATOR ||
          item.category?.i18n?.en?.name === PeoplePosition.HOUSE_REPRESENTATIVE)
    )
    if (
      !currentExperience ||
      !isString(currentExperience.category?.i18n?.en?.name)
    )
      return false
    return !!z
      .nativeEnum(PeoplePosition)
      .safeParse(currentExperience.category.i18n.en.name).data
  }

  /**
   * 解析國會經歷範圍
   * @param dto
   * @returns
   */
  static getCongressExperienceRange(
    dto: ApiPeople['experiences']
  ): CongressExperienceRange | null {
    if (!isArray(dto)) return null
    const congressExperiences = dto.filter(
      (item) =>
        item.category?.i18n?.en?.name === PeoplePosition.SENATOR ||
        item.category?.i18n?.en?.name === PeoplePosition.HOUSE_REPRESENTATIVE
    )
    if (congressExperiences.length === 0) return null
    const congresses = congressExperiences
      .flatMap(
        (item) =>
          item.positions?.flatMap((position) => position.congresses ?? []) ?? []
      )
      .filter(isNumber)
    const startYears = congressExperiences
      .flatMap(
        (item) =>
          item.positions?.flatMap((position) => {
            const start = DateUtils.parseDc(position.start?.datetime)
            return start ? start.year() : []
          }) ?? []
      )
      .filter(isNumber)
    const endYears = congressExperiences
      .flatMap(
        (item) =>
          item.positions?.flatMap((position) => {
            // 如果沒有 end，代表還在任職中，所以取目前年份
            const end = DateUtils.safeParseDc(position.end?.datetime)
            return end.year()
          }) ?? []
      )
      .filter(isNumber)
    if (congresses.length === 0) return null
    return {
      earliestCongress: min(congresses),
      latestCongress: max(congresses),
      earliestCongressYear: min(startYears),
      latestCongressYear: max(endYears),
    }
  }

  static getCurrentExperience(people: People) {
    if (!people.experience) return null
    return people.experience.findLast((item) => item)
  }
}
