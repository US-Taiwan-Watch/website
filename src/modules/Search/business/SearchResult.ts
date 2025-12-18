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

type PeopleHighlight = {
  id: string
  i18n: Record<
    keyof NonNullable<ApiPeople['i18n']>,
    | {
        displayName?: {
          value: string
        }
        bio?: {
          value: string
        }
      }
    | undefined
  >
}
type BillHighlight = {
  id: string
  i18n: Record<
    keyof NonNullable<ApiBill['i18n']>,
    | {
        title?: {
          value: string
        }
        summary?: {
          value: string
        }
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
  Podcast = 'podcast',
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
    total: z.number(),
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.People,
        { message: "People results must be of type 'people'" }
      )
    ),
  }),
  bills: z.object({
    total: z.number(),
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.Bill,
        { message: "Bills results must be of type 'bill'" }
      )
    ),
  }),
  articles: z.object({
    total: z.number(),
    results: z.array(
      searchResultSchema.refine(
        (result) => result.type === SearchResultType.Article,
        { message: "Articles results must be of type 'article'" }
      )
    ),
  }),
  ketagalans: z.object({
    total: z.number(),
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
      total: dto.people?.count ?? 0,
      results: dto.people?.highlights?.map((highlight: PeopleHighlight) => {
        const matched = peopleMap.get(highlight.id)

        if (!matched) {
          return null
        }

        const matchedHighlight =
          highlight.i18n[CommonUtils.parseAPII18nKey(lang)]

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
      total: dto.bill?.count ?? 0,
      results: dto.bill?.highlights?.map((highlight: BillHighlight) => {
        const matched = billMap.get(highlight.id)

        if (!matched) {
          return null
        }

        const matchedHighlight =
          highlight.i18n[CommonUtils.parseAPII18nKey(lang)]

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
      total: dto.ustwArticle?.count ?? 0,
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
      total: dto.ketagalanArticle?.count ?? 0,
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
}
