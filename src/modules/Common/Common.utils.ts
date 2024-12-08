import { Party } from '@/common/enums/Party'
import { Maybe } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

export default class CommonUtils {
  static getI18nkey(lang: Language) {
    switch (lang) {
      case 'en-US':
        return 'en'
      case 'zh-TW':
        return 'zh'
      default:
        return 'en'
    }
  }

  static getParty(party?: Maybe<string>) {
    if (!party) return undefined
    return z.nativeEnum(Party).safeParse(party).data
  }
}
