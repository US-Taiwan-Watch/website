import { Congress } from '@/common/classes/Congress'
import { Party } from '@/common/enums/Party'
import { PeoplePosition } from '@/modules/People/enums/PeoplePosition'
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

  constructor (private readonly people: PeopleArgs) {
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
  }

  get link () {
    return `/people/${this.id}`
  }
}
