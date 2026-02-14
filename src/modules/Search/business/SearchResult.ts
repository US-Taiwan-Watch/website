import { Language } from '@/common/lib/i18n/types'
import {
  Article,
  articleSchema,
  ArticleType,
  ArticleUtils,
} from '@/modules/Article/business/Article'
import { Bill, billSchema, BillUtils } from '@/modules/Bill/business/Bill'
import {
  People,
  peopleSchema,
  PeopleUtils,
} from '@/modules/People/business/People'
import { z } from 'zod'
import {
  Search as ApiSearch,
  SearchFilterEnum as ApiSearchFilterEnum,
  Bill as ApiBill,
  People as ApiPeople,
} from '@/common/lib/graphql/__generated__/graphql'
import CommonUtils from '@/modules/Common/Common.utils'

type HighlightField = {
  value: string
  matchLevel?: 'none' | 'partial' | 'full'
  matchedWords?: string[]
}

type PeopleHighlight = {
  id: string
  i18n: Record<
    keyof NonNullable<ApiPeople['i18n']>,
    | {
        displayName?: HighlightField
        bio?: HighlightField
      }
    | undefined
  >
}
type BillHighlight = {
  id: string
  i18n: Record<
    keyof NonNullable<ApiBill['i18n']>,
    | {
        title?: HighlightField
        summary?: HighlightField
      }
    | undefined
  >
}

type ArticleHighlight = {
  id: string
  title?: {
    value: string
  }
  excerpt?: {
    value: string
  }
}

type KetagalanArticleHighlight = {
  id: string
  title?: {
    value: string
  }
  excerpt?: {
    value: string
  }
}

export enum SearchResultType {
  People = 'people',
  Bill = 'bill',
  Article = 'article',
  Ketagalan = 'ketagalan',
}

const searchResultSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(SearchResultType.People),
    value: peopleSchema,
    highlights: z.object({
      /** 人名 */
      name: z.string(),
      /** 介紹 */
      bioByAI: z.string(),
    }),
  }),
  z.object({
    type: z.literal(SearchResultType.Bill),
    value: billSchema,
    highlights: z.object({
      /** 標題 */
      title: z.string(),
      /** 摘要 */
      summary: z.string(),
    }),
  }),
  z.object({
    type: z.literal(SearchResultType.Article),
    value: articleSchema,
    highlights: z.object({
      /** 標題 */
      title: z.string(),
      /** 摘要 */
      description: z.string(),
    }),
  }),
  z.object({
    type: z.literal(SearchResultType.Ketagalan),
    value: articleSchema,
    highlights: z.object({
      /** 標題 */
      title: z.string(),
      /** 摘要 */
      description: z.string(),
    }),
  }),
])

export type SearchResultInput = z.input<typeof searchResultSchema>
export type SearchResult = z.infer<typeof searchResultSchema>

const searchResultsSchema = z.object({
  people: z.object({
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.People,
        { message: "People results must be of type 'people'" }
      )
    ),
  }),
  bills: z.object({
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.Bill,
        { message: "Bills results must be of type 'bill'" }
      )
    ),
  }),
  articles: z.object({
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.Article,
        { message: "Articles results must be of type 'article'" }
      )
    ),
  }),
  ketagalans: z.object({
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.Ketagalan,
        { message: "Ketagalans results must be of type 'ketagalan'" }
      )
    ),
  }),
})

export type SearchResultsInput = z.input<typeof searchResultsSchema>
export type SearchResults = z.infer<typeof searchResultsSchema>

export type SearchResultTotalMap = {
  [key in keyof SearchResults]: number
}

export class SearchResultsUtils {
  static parse(lang: Language, dto: ApiSearch) {
    const results: Partial<SearchResultsInput> = {}

    // People
    const peopleMap = new Map<string, People>()
    dto.people?.items
      ?.filter((item) => item !== null)
      .forEach((item) => {
        if (item.id) peopleMap.set(item.id, PeopleUtils.parse(lang, item))
      })

    const peopleResults: SearchResults['people'] = {
      results: dto.people?.highlights?.map((highlight: PeopleHighlight) => {
        const matched = peopleMap.get(highlight.id)

        if (!matched) {
          return null
        }

        const bestLang = SearchResultsUtils.getBestMatchLanguage(
          highlight.i18n,
          ['displayName', 'bio'],
          lang
        )
        const matchedHighlight = highlight.i18n[bestLang]

        return {
          type: SearchResultType.People,
          value: matched,
          highlights: {
            name: matchedHighlight?.displayName?.value ?? matched.name ?? '',
            bioByAI:
              SearchResultsUtils.trimHighlightText(
                matchedHighlight?.bio?.value ?? matched.bioByAI ?? ''
              ) ?? '',
          },
        }
      }),
    }

    results.people = peopleResults

    // Bills
    const billMap = new Map<string, Bill>()
    dto.bill?.items
      ?.filter((item) => item !== null)
      .forEach((item) => {
        if (item.id) billMap.set(item.id, BillUtils.parse(lang, item))
      })

    const billResults: SearchResults['bills'] = {
      results: dto.bill?.highlights?.map((highlight: BillHighlight) => {
        const matched = billMap.get(highlight.id)

        if (!matched) {
          return null
        }

        const bestLang = SearchResultsUtils.getBestMatchLanguage(
          highlight.i18n,
          ['title', 'summary'],
          lang
        )
        const matchedHighlight = highlight.i18n[bestLang]

        return {
          type: SearchResultType.Bill,
          value: matched,
          highlights: {
            title: matchedHighlight?.title?.value ?? matched.title ?? '',
            summary:
              SearchResultsUtils.trimHighlightText(
                matchedHighlight?.summary?.value ?? matched.summary ?? ''
              ) ?? '',
          },
        }
      }),
    }

    results.bills = billResults

    // Articles
    const articleMap = new Map<string, Article>()
    dto.ustwArticle?.items
      ?.filter((item) => item !== null)
      .forEach((item) => {
        if (item.id)
          articleMap.set(
            item.id,
            ArticleUtils.parse(lang, item, ArticleType.Article)
          )
      })

    const articleResults: SearchResults['articles'] = {
      results: dto.ustwArticle?.highlights?.map(
        (highlight: ArticleHighlight) => {
          const matched = articleMap.get(highlight.id)

          if (!matched) {
            return null
          }

          return {
            type: SearchResultType.Article,
            value: matched,
            highlights: {
              title: highlight.title?.value ?? matched.title ?? '',
              description:
                SearchResultsUtils.trimHighlightText(
                  highlight.excerpt?.value ?? matched.description ?? ''
                ) ?? '',
            },
          }
        }
      ),
    }

    results.articles = articleResults

    // Ketagalan
    const ketagalanMap = new Map<string, Article>()
    dto.ketagalanArticle?.items
      ?.filter((item) => item !== null)
      .forEach((item) => {
        if (item.id)
          ketagalanMap.set(
            item.id,
            ArticleUtils.parse(lang, item, ArticleType.Ketagalan)
          )
      })

    const ketagalanResults: SearchResults['ketagalans'] = {
      results: dto.ketagalanArticle?.highlights?.map(
        (highlight: KetagalanArticleHighlight) => {
          const matched = ketagalanMap.get(highlight.id)

          if (!matched) {
            return null
          }

          return {
            type: SearchResultType.Ketagalan,
            value: matched,
            highlights: {
              title: highlight.title?.value ?? matched.title ?? '',
              description:
                SearchResultsUtils.trimHighlightText(
                  highlight.excerpt?.value ?? matched.description ?? ''
                ) ?? '',
            },
          }
        }
      ),
    }

    results.ketagalans = ketagalanResults

    return searchResultsSchema.parse(results)
  }

  static mapApiFilterType(
    type: SearchResultType | null
  ): ApiSearchFilterEnum | undefined {
    switch (type) {
      case SearchResultType.People:
        return ApiSearchFilterEnum.People
      case SearchResultType.Bill:
        return ApiSearchFilterEnum.Bill
      case SearchResultType.Article:
        return ApiSearchFilterEnum.UstwArticle
      case SearchResultType.Ketagalan:
        return ApiSearchFilterEnum.KetagalanArticle
    }
  }

  static PAGE_SIZE = 10

  static getTotalPages(results: ApiSearch): number {
    return Math.ceil(
      ((results.people?.count ?? 0) +
        (results.bill?.count ?? 0) +
        (results.ustwArticle?.count ?? 0) +
        (results.ketagalanArticle?.count ?? 0)) /
        SearchResultsUtils.PAGE_SIZE
    )
  }

  /**
   * 裁切 `<em>...</em>` 出現前最多 10 個字
   * @param text - The text to trim
   * @returns The trimmed text
   */
  static trimHighlightText(text: string) {
    const emIndex = text.indexOf('<em>')
    if (emIndex === -1) return text

    const startIndex = Math.max(0, emIndex - 10)
    const slicedText = text.slice(startIndex)

    if (startIndex === 0) return slicedText

    const lastSpaceIndex = text.slice(0, startIndex).lastIndexOf(' ')

    return '... ' + text.slice(lastSpaceIndex + 1)
  }

  /**
   * 根據 highlight 的 matchLevel 決定應該使用哪個語言的結果
   * 優先順序：full > partial > none > fallback (使用者語言)
   * @param highlightI18n - 各語言的 highlight 結果
   * @param fieldNames - 要檢查的欄位名稱（依序檢查，找到 match 即回傳）
   * @param userLang - 使用者的語言設定
   * @returns 最佳匹配的語言 key
   */
  static getBestMatchLanguage<
    T extends Record<
      string,
      Record<string, HighlightField | undefined> | undefined
    >,
  >(highlightI18n: T, fieldNames: string[], userLang: Language): keyof T {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(userLang)
    const langs = Object.keys(highlightI18n) as Array<keyof T>

    // 依序檢查每個欄位
    for (const fieldName of fieldNames) {
      // 先找 matchLevel 是 'full' 的語言
      for (const lang of langs) {
        const langData = highlightI18n[lang]
        if (!langData) continue

        const field = langData[fieldName]
        if (field?.matchLevel === 'full') {
          return lang
        }
      }

      // 如果沒有 'full'，找 matchLevel 是 'partial' 的語言
      for (const lang of langs) {
        const langData = highlightI18n[lang]
        if (!langData) continue

        const field = langData[fieldName]
        if (field?.matchLevel === 'partial') {
          return lang
        }
      }
    }

    // 最後返回使用者的語言（優先 apiLang，其次 fallbackLang）
    if (apiLang in highlightI18n) {
      return apiLang as keyof T
    }
    if (fallbackLang in highlightI18n) {
      return fallbackLang as keyof T
    }

    // 如果都沒有，返回第一個可用的語言
    return langs[0]
  }
}
