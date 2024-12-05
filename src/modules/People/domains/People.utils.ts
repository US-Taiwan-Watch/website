import { People as PeopleInputType } from '@/modules/People/graphql/types'
import { Party } from '@/common/enums/Party'
import { z } from 'zod'
import { CommonUtils } from '@/modules/Common/domain/Common.utils'

export type People = PeopleInputType & {
  currentParty?: Party
}
export type PeopleExperience = NonNullable<
  PeopleInputType['experiences']
>[number]
export type PeoplePartyChangeRecord = NonNullable<
  PeopleInputType['partyChangeRecords']
>[number]

export class PeopleUtils {
  static parse(people: PeopleInputType): People {
    const currentPartyResult = z
      .nativeEnum(Party)
      .safeParse(people.currentParty)

    return {
      ...people,
      currentParty: currentPartyResult.data,
    }
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
      year:
        CommonUtils.parseDateTime(position.end?.datetime)?.diff(
          CommonUtils.parseDateTime(position.start?.datetime),
          'year'
        ) ?? 0,
      month:
        CommonUtils.parseDateTime(position.end?.datetime)?.diff(
          CommonUtils.parseDateTime(position.start?.datetime),
          'month'
        ) ?? 0,
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
