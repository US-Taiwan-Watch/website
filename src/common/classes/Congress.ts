import { Party } from '@/common/enums/Party'
import { isMap, isNumber } from 'lodash-es'
import {
  Maybe,
  People_CongressionalData as PeopleCongressionalDataDTO,
} from '@/common/lib/graphql/__generated__/graphql'
import dayjs from 'dayjs'

interface CongressArgs {
  congressNumber?: number
  startYear?: number
  endYear?: number
  houseMembers?: number
  houseDistribution?: Map<Party, number>
  senateMembers?: number
  senateDistribution?: Map<Party, number>
}

/**
 * 管理國會資料
 */
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromPeopleCongressDTO(dto?: Maybe<PeopleCongressionalDataDTO>) {
    return new Congress({})
  }

  /**
   * 取得目前國會屆數
   * @returns 目前國會屆數
   */
  static getCurrentCongressNumber() {
    const baseYear = 1789 // 第一屆國會開始年份
    const baseNumber = 1 // 第一屆國會屆數

    const today = dayjs()
    const currentYear = today.year()
    const currentMonth = today.month() // 0-11
    const currentDay = today.date() // 1-31

    // 計算從基準年到現在過了幾個兩年期
    let congressNumber = Math.floor((currentYear - baseYear) / 2) + baseNumber

    // 如果現在是 1月1日 或 1月2日，要減一屆
    // 因為新的國會要到 1月3日 才就職
    if (currentMonth === 0 && currentDay < 3) {
      congressNumber--
    }

    return congressNumber
  }

  /**
   * 取得國會屆數最小值，站內提供資訊的最小國會屆數，不代表現實
   * @returns 國會屆數最小值
   */
  static minCongressNumber() {
    return 96
  }

  static congressEstablishYear = 1789

  /**
   * 取得國會屆數的開始與結束年份
   * @param congressNumber
   * @returns
   */
  static getCongressYearsByCongressNumber(
    congressNumber: number
  ): [number, number] {
    const startYear = this.congressEstablishYear + (congressNumber - 1) * 2 // 每屆兩年
    const endYear = startYear + 1
    return [startYear, endYear]
  }
}
