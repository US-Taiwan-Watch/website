import { Maybe, Tag } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { isString } from 'lodash-es'

export default class TagUtils {
  static parseTag(lang: Language, tag?: Maybe<Tag>) {
    if (!tag) return undefined
    return tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined
  }

  static parseTags(
    lang: Language,
    tags?: Maybe<Maybe<Tag | undefined>[]>
  ): string[] {
    if (!tags) return []
    return tags
      .map((tag) => TagUtils.parseTag(lang, tag))
      .filter((tag) => isString(tag))
  }
}
