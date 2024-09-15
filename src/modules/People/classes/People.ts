import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
import dayjs, { Dayjs } from 'dayjs'
import { isArray, isString } from 'lodash-es'

interface PeopleArgs {
  id: string
  name: string
  image: string
  description: string
  party: Party
  position: PeoplePosition
  congress: Congress
  tags: Array<string>
  partyExperience: Array<{
    party: Party
    start?: string
    end?: string
  }>
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
  partyExperience?: Array<{
    party: Party
    start?: Dayjs
    end?: Dayjs
  }>

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
      this.partyExperience = people.partyExperience.map((item) => {
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
  }

  get link() {
    return `/people/${this.id}`
  }
}
