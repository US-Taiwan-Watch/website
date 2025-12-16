import {
  SearchSuggestion,
  SearchSuggestionType,
  SearchSuggestionUtils,
} from '@/modules/Search/business/SearchSuggestion'
import { type HighlightResultOption } from 'algoliasearch'
import {
  Bill_I18n as BillI18n,
  People_I18n as PeopleI18n,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import Dompurify from 'isomorphic-dompurify'

/**
 * Utility type: 移除 __typename 欄位
 */
type OmitTypename<T> = Omit<T, '__typename'>

/**
 * Utility type: 將 Maybe<T> 轉換為 T
 * Maybe<T> 在 GraphQL 中代表 T | null | undefined
 */
type UnwrapMaybe<T> = {
  [K in keyof T]: NonNullable<T[K]>
}

/**
 * Utility type: 將所有 optional 欄位改為 required
 */
type RequiredFields<T> = {
  [K in keyof T]-?: T[K]
}

/**
 * Utility type: 組合所有轉換（用於單個物件）
 * 1. 移除 __typename
 * 2. 將 Maybe<T> 轉為 T
 * 3. 將 optional 改為 required
 */
type AlgoliaTransform<T> = RequiredFields<UnwrapMaybe<OmitTypename<T>>>

/**
 * Utility type: 動態轉換 i18n 物件，可選擇需要的欄位
 * 1. 移除 __typename key
 * 2. 將每個語言的 value 套用 AlgoliaTransform
 * 3. 將所有語言改為 required
 * 4. 只保留指定的欄位（透過 Fields 參數
 */
type AlgoliaI18nTransform<
  T,
  Fields extends keyof OmitTypename<
    NonNullable<T[Exclude<keyof T, '__typename'>]>
  >,
> = {
  [K in Exclude<keyof T, '__typename'>]-?: Pick<
    AlgoliaTransform<NonNullable<T[K]>>,
    Fields
  >
}

type AlgoliaBillI18n = AlgoliaI18nTransform<BillI18n, 'title' | 'summary'>
type AlgoliaPeopleI18n = AlgoliaI18nTransform<PeopleI18n, 'bio' | 'displayName'>

export type Hit =
  | {
      type: 'ustw-article'
      excerpt: string
      objectID: string
      title: string
      _highlightResult: {
        excerpt: HighlightResultOption
        title: HighlightResultOption
        type: HighlightResultOption
      }
    }
  | {
      type: 'ketagalan-article'
      excerpt: string
      objectID: string
      title: string
      _highlightResult: {
        excerpt: HighlightResultOption
        title: HighlightResultOption
        type: HighlightResultOption
      }
    }
  | {
      type: 'bill'
      i18n: AlgoliaBillI18n
      objectID: string
      _highlightResult: {
        i18n: {
          [K in keyof AlgoliaBillI18n]: {
            [L in keyof AlgoliaBillI18n[K]]: HighlightResultOption
          }
        }
      }
    }
  | {
      type: 'people'
      i18n: AlgoliaPeopleI18n
      objectID: string
      _highlightResult: {
        i18n: {
          [K in keyof AlgoliaPeopleI18n]: {
            [L in keyof AlgoliaPeopleI18n[K]]: HighlightResultOption
          }
        }
      }
    }

export const sortSearchHitsCompareFnGenerator = (language: Language) => {
  return (a: Hit, b: Hit) => {
    const apiLang = CommonUtils.parseAPII18nKey(language)

    // Helper function to get title highlight result
    const getTitleHighlight = (hit: Hit): HighlightResultOption => {
      if (hit.type === 'ustw-article' || hit.type === 'ketagalan-article') {
        return hit._highlightResult.title
      }
      if (hit.type === 'bill') {
        return hit._highlightResult.i18n[apiLang].title
      }
      // hit.type === 'people'
      return hit._highlightResult.i18n[apiLang].displayName
    }

    // Helper function to get content highlight result
    const getContentHighlight = (hit: Hit): HighlightResultOption => {
      if (hit.type === 'ustw-article' || hit.type === 'ketagalan-article') {
        return hit._highlightResult.excerpt
      }
      if (hit.type === 'bill') {
        return hit._highlightResult.i18n[apiLang].summary
      }
      // hit.type === 'people'
      return hit._highlightResult.i18n[apiLang].bio
    }

    // Helper function to calculate priority (lower is better)
    const getPriority = (hit: Hit): number => {
      const titleHighlight = getTitleHighlight(hit)
      const contentHighlight = getContentHighlight(hit)

      // Priority 1: title matchLevel = full
      if (titleHighlight.matchLevel === 'full') return 1
      // Priority 2: title matchLevel = partial
      if (titleHighlight.matchLevel === 'partial') return 2
      // Priority 3: content matchLevel = full
      if (contentHighlight.matchLevel === 'full') return 3
      // Priority 4: content matchLevel = partial
      if (contentHighlight.matchLevel === 'partial') return 4
      // No match or other matchLevel
      return 5
    }

    const priorityA = getPriority(a)
    const priorityB = getPriority(b)

    return priorityA - priorityB
  }
}

/**
 * 將 Algolia hit 轉換成 SearchSuggestion 格式
 */
export const parseSearchSuggestionFromHit = (
  language: Language,
  hit: Hit
): SearchSuggestion | null => {
  if (hit.type === 'ustw-article') {
    return SearchSuggestionUtils.parse({
      type: SearchSuggestionType.UstwArticle,
      value: Dompurify.sanitize(hit._highlightResult.title.value),
      objectID: hit.objectID,
    })
  }

  if (hit.type === 'ketagalan-article') {
    return SearchSuggestionUtils.parse({
      type: SearchSuggestionType.KetagalanArticle,
      value: Dompurify.sanitize(hit._highlightResult.title.value),
      objectID: hit.objectID,
    })
  }

  if (hit.type === 'bill') {
    const apiLang = CommonUtils.parseAPII18nKey(language)
    return SearchSuggestionUtils.parse({
      type: SearchSuggestionType.Bill,
      value: Dompurify.sanitize(hit._highlightResult.i18n[apiLang].title.value),
      objectID: hit.objectID,
    })
  }

  if (hit.type === 'people') {
    const apiLang = CommonUtils.parseAPII18nKey(language)
    return SearchSuggestionUtils.parse({
      type: SearchSuggestionType.People,
      value: Dompurify.sanitize(
        hit._highlightResult.i18n[apiLang].displayName.value
      ),
      objectID: hit.objectID,
    })
  }

  return null
}
