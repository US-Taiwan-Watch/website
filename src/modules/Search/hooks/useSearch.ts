import { useCallback, useState } from 'react'
import {
  SearchSuggestion,
  SearchSuggestionType,
} from '@/modules/Search/business/SearchSuggestion'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { useParams, useRouter } from 'next/navigation'
import { RouteName } from '@/common/lib/router/routes'
import { debounce, isNull } from 'lodash-es'
import {
  googleAnalyticsSearchEvent,
  googleAnalyticsSearchSuggestionEvent,
} from '@/common/lib/googleAnalytics'
import { algoliaClient, ALGOLIA_INDEX_NAME } from '@/common/lib/algolia/client'
import {
  type Hit,
  parseSearchSuggestionFromHit,
} from '@/common/lib/algolia/utils'
import { Language } from '@/common/lib/i18n/types'

const HITS_PER_PAGE = 20

export default function useSearch() {
  const { lang } = useParams<{ lang: Language }>()
  const { resolveRouteUrl } = useURouterClient()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSuggestions = useCallback(
    async (query: string) => {
      if (!query) {
        setSearchSuggestions([])
        return
      }

      /** 記錄 GA 搜尋建議事件 */
      googleAnalyticsSearchSuggestionEvent({
        searchTerm: query,
      })

      try {
        const { hits } = await algoliaClient.searchSingleIndex({
          indexName: ALGOLIA_INDEX_NAME,
          searchParams: {
            query,
            hitsPerPage: HITS_PER_PAGE,
            attributesToRetrieve: ['*'],
          },
        })

        const suggestions = hits
          .map((hit) =>
            parseSearchSuggestionFromHit(lang, hit as unknown as Hit)
          )
          .filter((suggestion) => !isNull(suggestion))

        setSearchSuggestions(suggestions)
      } catch (error) {
        console.error('Algolia search error:', error)
        setSearchSuggestions([])
      }
    },
    [lang]
  )

  const handleSearchQueryChange = useCallback(
    (value: string) => {
      setSearchQuery(value)

      handleSearchSuggestions(value)
    },
    [handleSearchSuggestions]
  )

  const [searchSuggestions, setSearchSuggestions] = useState<
    Array<SearchSuggestion>
  >([])

  const router = useRouter()
  const handleNavigateSearchPage = useCallback(
    (query: string) => {
      /** 記錄 GA 搜尋事件 */
      googleAnalyticsSearchEvent({
        searchTerm: query,
      })

      router.push(
        resolveRouteUrl({
          name: RouteName.Search,
          query: {
            query,
          },
        })
      )
    },
    [resolveRouteUrl, router]
  )

  /**
   * 跳轉到特定物件頁面
   */
  const handleNavigateSuggestionObject = useCallback(
    (suggestion: SearchSuggestion) => {
      if (suggestion.type === SearchSuggestionType.UstwArticle) {
        router.push(
          resolveRouteUrl({
            name: RouteName.ArticleDetail,
            params: {
              articleId: suggestion.objectID,
            },
          })
        )
      }

      if (suggestion.type === SearchSuggestionType.KetagalanArticle) {
        router.push(
          resolveRouteUrl({
            name: RouteName.KetagalanMediaDetail,
            params: {
              articleId: suggestion.objectID,
            },
          })
        )
      }

      if (suggestion.type === SearchSuggestionType.Bill) {
        router.push(
          resolveRouteUrl({
            name: RouteName.BillDetail,
            params: {
              billId: suggestion.objectID,
            },
          })
        )
      }

      if (suggestion.type === SearchSuggestionType.People) {
        router.push(
          resolveRouteUrl({
            name: RouteName.PeopleDetail,
            params: {
              peopleId: suggestion.objectID,
            },
          })
        )
      }
    },
    [resolveRouteUrl, router]
  )

  return {
    searchQuery,
    handleSearchQueryChange: debounce(handleSearchQueryChange, 1000),
    searchSuggestions,
    handleSearchSuggestions,
    handleNavigateSearchPage,
    handleNavigateSuggestionObject,
  }
}
