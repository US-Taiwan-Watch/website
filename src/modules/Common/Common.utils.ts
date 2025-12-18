import { Party } from '@/common/enums/Party'
import { Maybe } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

export default class CommonUtils {
  /**
   * 把前端語言轉換成 API 語言
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
   * 後端回傳的 constituency 格式為 newYork，轉換成 titlecase，即 New York
   * @param constituency
   * @returns
   */
  static formatConstituency(constituency: string) {
    const withSpaces = constituency.replace(/([a-z])([A-Z])/g, '$1 $2')
    const formatted = withSpaces.replace(/\b\w+/g, function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    return formatted
  }
}
