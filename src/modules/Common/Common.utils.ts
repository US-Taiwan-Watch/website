import { Party } from '@/common/enums/Party'
import { Maybe } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

type ApiI18nKey = 'en' | 'zh'

export default class CommonUtils {
  /**
   * 把前端語言轉換成 API 語言，若 API 對應語言沒有直，則 fallback 到另一個語言
   * @description 目前後端僅有兩種語言，未來若有三種以上語言需要特別設計 fallback 機制
   * @param lang
   * @returns
   */
  static parseApiI18nKey(lang: Language): [ApiI18nKey, ApiI18nKey] {
    let apiLang: ApiI18nKey
    switch (lang) {
      case 'en-US':
        apiLang = 'en'
        break
      case 'zh-TW':
        apiLang = 'zh'
        break
      default:
        apiLang = 'en'
    }

    const fallbackLang = apiLang === 'en' ? 'zh' : 'en'

    return [apiLang, fallbackLang]
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
