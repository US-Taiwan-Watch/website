import { Congress } from '@/common/classes/Congress'
import { ChamberEnum } from '@/common/enums/Chamber'
import { Party } from '@/common/enums/Party'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import { ROUTES } from '@/routes'
import dayjs, { Dayjs } from 'dayjs'
import { isArray, isString } from 'lodash-es'

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
  id: string
  name: string
  image: string
  description: string
  party: Party
  position: PeoplePosition
  congress: Congress
  tags: Array<string>
  partyExperience: Array<PartyExperienceArgs>
  experience: Array<ExperienceArgs>
  constituency?: string
  chamber?: ChamberEnum
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
  // 位置
  position?: PeoplePosition
  // 國會
  congress?: Congress
  // 標籤
  tags?: Array<string>
  // TODO: 政黨經歷暫定，後續討論
  partyExperience?: Array<PartyExperience>
  // TODO: 經歷暫定，後續討論
  experience?: Array<Experience>
  // 選區
  constituency?: string
  // 參眾議院
  chamber?: ChamberEnum

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
    if (people.congress instanceof Congress) {
      this.congress = people.congress
    }
    if (isArray(people.tags)) {
      this.tags = people.tags
    }
    if (isArray(people.partyExperience)) {
      this.partyExperience = People.TransformPartyExperience(
        people.partyExperience
      )
    }
    if (isArray(people.experience)) {
      this.experience = People.TransformExperience(people.experience)
    }
    if (isString(people.constituency)) {
      this.constituency = people.constituency
    }
    if (isString(people.chamber)) {
      this.chamber = people.chamber
    }
  }

  get link() {
    return `${ROUTES.PEOPLE}/${this.id}`
  }

  static TransformPartyExperience(partyExperience: Array<PartyExperienceArgs>) {
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

  static TransformExperience(experience: Array<ExperienceArgs>) {
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
          ? People.TransformExperience(item.experience)
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
  static CalculateExperienceDuration(experience: Experience | PartyExperience) {
    return {
      year: experience.end?.diff(experience.start, 'year') ?? 0,
      month: (experience.end?.diff(experience.start, 'month') ?? 0) % 12,
    }
  }

  // Nov 2022
  static TimeFormat = 'MMM YYYY'
}
