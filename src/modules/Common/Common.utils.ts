import { Party } from '@/common/enums/Party'
import { Maybe } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

export default class CommonUtils {
  /**
   * 把前端語言轉換成 API 語言
   * TODO: 後續前端語言 key 可以改成與 API 一致
   * @param lang
   * @returns
   */
  static parseAPII18nKey(lang: Language) {
    switch (lang) {
      case 'en-US':
        return 'en'
      case 'zh-TW':
        return 'zh'
      default:
        return 'en'
    }
  }

  /**
   * 把 API 的 party 轉換成前端 enum
   * @param party
   * @returns
   */
  static parseAPIParty(party?: Maybe<string>) {
    if (!party) return undefined
    return z.nativeEnum(Party).safeParse(party).data
  }

  /**
   * 取得國會屆數的開始與結束年份
   * @param congressNumber
   * @returns
   */
  static getCongressYears(congressNumber: number): string {
    const startYear = 1789 + (congressNumber - 1) * 2 // 每屆兩年
    const endYear = startYear + 1
    return `${startYear}-${endYear}`
  }
}
