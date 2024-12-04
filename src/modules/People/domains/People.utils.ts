import dayjs, { Dayjs } from 'dayjs'
import { People as PeopleInputType } from '@/modules/People/graphql/types'
import { Party } from '@/common/enums/Party'
import { z } from 'zod'

export type People = PeopleInputType & {
  birthday?: Dayjs | null
  currentParty?: Party
}
export type PeopleExperience = Omit<
  NonNullable<PeopleInputType['experiences']>[number],
  'positions'
> & {
  positions?: Array<
    NonNullable<
      NonNullable<People['experiences']>[number]['positions']
    >[number] & {
      end?: Dayjs | null
      start?: Dayjs | null
    }
  > | null
}
export type PeoplePartyChangeRecord = NonNullable<
  PeopleInputType['partyChangeRecords']
>[number] & {
  changedAt?: Dayjs | null
}

export class PeopleUtils {
  static parseDateTime(datetime?: string | null) {
    return datetime && dayjs(datetime).isValid() ? dayjs(datetime) : null
  }

  static parse(people: PeopleInputType): People {
    const birthday = PeopleUtils.parseDateTime(people.birthday?.datetime)
    const currentPartyResult = z
      .nativeEnum(Party)
      .safeParse(people.currentParty)

    return {
      ...people,
      birthday,
      currentParty: currentPartyResult.data,
    }
  }

  static parseExperiences(partyExperiences: PeopleInputType['experiences']) {
    if (!partyExperiences) return []

    return partyExperiences.map((item): PeopleExperience => {
      return {
        ...item,
        positions: item.positions?.map((position) => ({
          ...position,
          end: PeopleUtils.parseDateTime(position.end?.datetime),
          start: PeopleUtils.parseDateTime(position.start?.datetime),
        })),
      }
    })
  }

  static parsePartyChangeRecords(
    partyChangeRecords: PeopleInputType['partyChangeRecords']
  ) {
    if (!partyChangeRecords) return []

    return partyChangeRecords.map((item): PeoplePartyChangeRecord => {
      return {
        ...item,
        changedAt: PeopleUtils.parseDateTime(item.changedAt?.datetime),
      }
    })
  }

  /**
   * Calculate two dayjs instances to years and months
   * e.x. 2022-01-01 ~ 2023-06-01 => 1 yr 5 mo
   * @param experience
   * @returns
   */
  static calculateExperiencePositionDuration(
    position: NonNullable<NonNullable<PeopleExperience['positions']>[number]>
  ) {
    return {
      year: position.end?.diff(position.start, 'year') ?? 0,
      month: (position.end?.diff(position.start, 'month') ?? 0) % 12,
    }
  }

  // Nov 2022
  static TimeFormat = 'MMM YYYY'

  /**
   * 判斷是否為現任議員
   * TODO: 確認怎麼分辨『現任』
   * @param people
   * @returns
   */
  static isCurrentMember(people: People) {
    // FIXME: avoid eslint error
    console.log(people)
    // FIXME: 確認怎麼分辨『現任』
    return true
  }

  static link(people: People) {
    if (!people.id) return ''

    return `/people/${people.id}`
  }
}
