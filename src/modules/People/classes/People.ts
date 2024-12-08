import { Congress } from '@/common/classes/Congress'
import { ChamberEnum } from '@/common/enums/Chamber'
import { Party } from '@/common/enums/Party'
import { Bill } from '@/modules/Bill/classes/Bill'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import { ROUTES } from '@/routes'
import dayjs, { Dayjs } from 'dayjs'
import { isArray, isBoolean, isString, uniq } from 'lodash-es'
import {
  Maybe,
  People_Publications as PeoplePublications,
  People as PeopleDTO,
  People_CongressionalData_Committees as PeopleCongressionalDataCommittees,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'

interface PartyExperienceArgs {
  party: Party
  start?: string
  end?: string
}
export interface PartyExperience {
  party: Party
  start?: Dayjs
  end?: Dayjs
}

interface ExperienceArgs {
  title: string
  subtitle?: string
  start?: string
  end?: string
  descriptions?: Array<string>
  experience?: Array<ExperienceArgs>
}
export interface Experience {
  title: string
  subtitle?: string
  start?: Dayjs
  end?: Dayjs
  descriptions?: Array<string>
  experience?: Array<Experience>
}

interface PeopleArgs {
  id?: Maybe<string>
  name?: Maybe<string>
  image?: Maybe<string>
  description?: Maybe<string>
  party?: Party
  // 目前擔任的職位
  position?: PeoplePosition
  // 過去曾經擔任過的職位
  positions?: Array<PeoplePosition>
  congress?: Congress
  tags: Array<string>
  partyExperience?: Array<PartyExperienceArgs>
  experience?: Array<ExperienceArgs>
  constituency?: string
  chamber?: ChamberEnum
  publications?: Array<PeoplePublications>
  bioByAI?: string
  committees?: Array<PeopleCongressionalDataCommittees>
  isCurrentCongressMember?: boolean
}

export class People {
  // ID
  id?: string
  // 名字
  name?: string
  // 圖片
  image?: string
  // 描述
  description?: string
  // 政黨
  party?: Party
  // 目前擔任的職位
  position?: PeoplePosition
  // 曾經擔任過的職位
  positions?: Array<PeoplePosition>
  // 國會
  congress?: Congress
  // 標籤
  tags?: Array<string>
  // 政黨經歷暫定，後續討論
  partyExperience: Array<PartyExperience> = []
  // 經歷暫定，後續討論
  experience: Array<Experience> = []
  // 選區
  constituency?: string
  // 參眾議院
  chamber?: ChamberEnum
  // TODO: 資助法案
  sponsoredBills: Array<Bill> = []
  // TODO: 共同提案法案
  coSponsoredBills: Array<Bill> = []
  // TODO: 投票紀錄
  votingRecord: Array<unknown> = []
  // Bio by AI
  bioByAI?: string
  // 委員會
  committees: Array<PeopleCongressionalDataCommittees> = []
  // 出版品
  publications: Array<PeoplePublications> = []
  // 是否為現任議員
  isCurrentCongressMember: boolean = false

  constructor(private readonly people: PeopleArgs) {
    if (isString(people.id)) {
      this.id = people.id
    }
    if (isString(people.name)) {
      this.name = people.name
    }
    if (isString(people.image)) {
      this.image = people.image
    }
    if (isString(people.description)) {
      this.description = people.description
    }
    if (isString(people.party)) {
      this.party = people.party
    }
    if (isString(people.position)) {
      this.position = people.position
    }
    if (isArray(people.positions)) {
      this.positions = people.positions
    }
    if (people.congress instanceof Congress) {
      this.congress = people.congress
    }
    if (isArray(people.tags)) {
      this.tags = people.tags
    }
    if (isArray(people.partyExperience)) {
      this.partyExperience = People.transformPartyExperience(
        people.partyExperience
      )
    }
    if (isArray(people.experience)) {
      this.experience = People.transformExperience(people.experience)
    }
    if (isString(people.constituency)) {
      this.constituency = people.constituency
    }
    if (isString(people.chamber)) {
      this.chamber = people.chamber
    }
    if (isArray(people.publications)) {
      this.publications = people.publications
    }
    if (isString(people.bioByAI)) {
      this.bioByAI = people.bioByAI
    }
    if (isArray(people.committees)) {
      this.committees = people.committees
    }
    if (isBoolean(people.isCurrentCongressMember)) {
      this.isCurrentCongressMember = people.isCurrentCongressMember
    }
  }

  get link() {
    return `${ROUTES.PEOPLE}/${this.id}`
  }

  static transformPartyExperience(partyExperience: Array<PartyExperienceArgs>) {
    return partyExperience.map((item: PartyExperienceArgs): PartyExperience => {
      return {
        party: item.party,
        start: item.start
          ? dayjs(item.start).isValid()
            ? dayjs(item.start)
            : undefined
          : undefined,
        end: item.end
          ? dayjs(item.end).isValid()
            ? dayjs(item.end)
            : undefined
          : undefined,
      }
    })
  }

  static transformExperience(experience: Array<ExperienceArgs>) {
    return experience.map((item: ExperienceArgs): Experience => {
      return {
        title: item.title,
        subtitle: item.subtitle,
        start: item.start
          ? dayjs(item.start).isValid()
            ? dayjs(item.start)
            : undefined
          : undefined,
        end: item.end
          ? dayjs(item.end).isValid()
            ? dayjs(item.end)
            : undefined
          : undefined,
        descriptions: item.descriptions,
        experience: item.experience
          ? People.transformExperience(item.experience)
          : undefined,
      }
    })
  }

  /**
   * Calculate two dayjs instances to years and months
   * e.x. 2022-01-01 ~ 2023-06-01 => 1 yr 5 mo
   * @param experience
   * @returns
   */
  static calculateExperienceDuration(experience: Experience | PartyExperience) {
    return {
      year: experience.end?.diff(experience.start, 'year') ?? 0,
      month: (experience.end?.diff(experience.start, 'month') ?? 0) % 12,
    }
  }

  // Nov 2022
  static TimeFormat = 'MMM YYYY'

  /**
   * Workaround: 把目前後端 DTO 轉成前端 DTO
   * TODO: 把前端與後端架構做整合，並把 class 設計純粹的 utility class
   */
  static fromDTO(dto: PeopleDTO, lang: Language) {
    return new People({
      id: dto.id,
      name: dto.i18n?.[CommonUtils.getI18nkey(lang)]?.displayName,
      image: dto.photo?.url,
      description: dto.i18n?.[CommonUtils.getI18nkey(lang)]?.bio,
      party: CommonUtils.getParty(dto?.currentParty),
      position: People.parseCurrentPositionFromDTO(dto.experiences),
      positions: People.parsePositionsFromDTO(dto.experiences),
      congress: Congress.fromPeopleCongressDTO(dto.congressionalData),
      tags:
        dto.tags
          ?.map((tag) => tag.i18n?.[CommonUtils.getI18nkey(lang)]?.name)
          .filter((name) => isString(name)) ?? [],
      partyExperience: People.parsePartyExperienceArgsFromDTO(
        dto.partyChangeRecords
      ),
      experience: People.parseExperienceArgsFromDTO(dto.experiences),
      // TODO: 如何獲得選區
      constituency: '',
      // TODO: 如何確認參眾議院
      chamber: ChamberEnum.HOUSE,
      publications: dto.publications ?? [],
      bioByAI: dto.i18n?.[CommonUtils.getI18nkey(lang)]?.bio ?? '',
      committees: dto.congressionalData?.committees ?? [],
      isCurrentCongressMember: People.parseIsCurrentCongressMember(
        dto.experiences
      ),
    })
  }

  /**
   * Parse party experience args from DTO
   * @param dto
   * @returns
   */
  static parsePartyExperienceArgsFromDTO(dto: PeopleDTO['partyChangeRecords']) {
    if (!isArray(dto)) return []

    const args: Array<PartyExperienceArgs> = []
    for (let i = 0; i < dto.length; i++) {
      const item = dto[i]
      if (!isString(item.newParty)) continue
      const party = CommonUtils.getParty(item.newParty)
      if (!party) continue
      args.push({
        party,
        start: item.changedAt?.datetime ?? undefined,
        end: dto[i + 1]?.changedAt?.datetime ?? undefined,
      })
    }
    return args
  }

  /**
   * Parse experience args from DTO
   * @param dto
   * @returns
   */
  static parseExperienceArgsFromDTO(dto: PeopleDTO['experiences']) {
    if (!isArray(dto)) return []

    const args: Array<ExperienceArgs> = []
    for (let i = 0; i < dto.length; i++) {
      const item = dto[i]
      const positions = item.positions
      if (!isArray(positions)) continue
      if (positions.length === 1) {
        args.push({
          title: item.company ?? '',
          subtitle: positions[0].title ?? '',
          start: positions[0].start?.datetime ?? undefined,
          end: positions[0].end?.datetime ?? undefined,
          descriptions: positions[0].description
            ? [positions[0].description]
            : [],
        })
      } else {
        args.push({
          title: item.company ?? '',
          experience: positions.map((position) => ({
            title: position.title ?? '',
            start: position.start?.datetime ?? undefined,
            end: position.end?.datetime ?? undefined,
            descriptions: position.description ? [position.description] : [],
          })),
        })
      }
    }
    return args
  }

  static parseIsCurrentCongressMember(dto: PeopleDTO['experiences']) {
    if (!isArray(dto)) return false
    const currentExperience = dto.find(
      (item) =>
        item.isCurrent &&
        (item.category === PeoplePosition.SENATOR ||
          item.category === PeoplePosition.HOUSE_REPRESENTATIVE)
    )
    if (!currentExperience || !isString(currentExperience.category))
      return false
    return !!z.nativeEnum(PeoplePosition).safeParse(currentExperience.category)
      .data
  }

  /**
   * 解析目前擔任的職位
   * @param dto
   * @returns
   */
  static parseCurrentPositionFromDTO(
    dto: PeopleDTO['experiences']
  ): PeoplePosition | undefined {
    if (!isArray(dto)) return undefined
    const currentExperience = dto.find((item) => item.isCurrent)
    if (!currentExperience || !isString(currentExperience.category))
      return undefined
    return z.nativeEnum(PeoplePosition).safeParse(currentExperience.category)
      .data
  }

  /**
   * 解析過去曾經擔任過的職位
   * @param dto
   * @returns
   */
  static parsePositionsFromDTO(dto: PeopleDTO['experiences']) {
    if (!isArray(dto)) return []
    return uniq(
      dto
        .map(
          (item) => z.nativeEnum(PeoplePosition).safeParse(item.category).data
        )
        .filter(Boolean)
    ) as Array<PeoplePosition>
  }
}
