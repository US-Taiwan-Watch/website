// TODO: 先簡單設計給People使用

import { Party } from '@/common/enums/Party'
import { isMap, isNumber } from 'lodash-es'

interface CongressArgs {
  congressNumber: number
  startYear: number
  endYear: number
  houseMembers: number
  houseDistribution: Map<Party, number>
  senateMembers: number
  senateDistribution: Map<Party, number>
}

export class Congress {
  // 屆數
  congressNumber?: number
  // 開始年份
  startYear?: number
  // 結束年份
  endYear?: number
  // 眾議員人數
  houseMembers?: number
  // 眾議員政黨分布
  houseDistribution?: Map<Party, number>
  // 參議員人數
  senateMembers?: number
  // 參議員政黨分布
  senateDistribution?: Map<Party, number>

  constructor(private readonly congress: CongressArgs) {
    if (isNumber(congress.congressNumber)) {
      this.congressNumber = congress.congressNumber
    }
    if (isNumber(congress.startYear)) {
      this.startYear = congress.startYear
    }
    if (isNumber(congress.endYear)) {
      this.endYear = congress.endYear
    }
    if (isNumber(congress.houseMembers)) {
      this.houseMembers = congress.houseMembers
    }
    if (isMap(congress.houseDistribution)) {
      this.houseDistribution = congress.houseDistribution
    }
    if (isNumber(congress.senateMembers)) {
      this.senateMembers = congress.senateMembers
    }
    if (isMap(congress.senateDistribution)) {
      this.senateDistribution = congress.senateDistribution
    }
  }
}
