import { Maybe, Tag } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'

export default class TagUtils {
  static parseTagName(lang: Language, tag?: Maybe<Tag>) {
    if (!tag) return undefined
    return tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined
  }
}
