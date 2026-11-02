import { useCallback, useEffect, useRef, useState } from 'react'
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

const HITS_PER_PAGE_OF_ALGOLIA = 20
const DEBOUNCE_SEARCH_DELAY = 1000

export default function useSearch() {
  const { lang } = useParams<{ lang: Language }>()
  const { resolveRouteUrl } = useURouterClient()
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)
  const currentQueryRef = useRef<string>('')

  const handleSearchSuggestions = useCallback(
    async (query: string, pageNum: number, isNewSearch: boolean = false) => {
      if (!query) {
        setSearchSuggestions([])
        setIsLoading(false)
        return
      }

      // Cancel previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
      abortControllerRef.current = new AbortController()

      // Record GA event only for new search
      if (isNewSearch) {
        googleAnalyticsSearchSuggestionEvent({
          searchTerm: query,
        })
      }

      setIsLoading(true)
      setError(null)

      try {
        const { hits, nbPages } = await algoliaClient.searchSingleIndex({
          indexName: ALGOLIA_INDEX_NAME,
          searchParams: {
            query,
            page: pageNum,
            hitsPerPage: HITS_PER_PAGE_OF_ALGOLIA,
            attributesToRetrieve: ['*'],
          },
        })

        // Avoid race condition
        if (query !== currentQueryRef.current) {
          return
        }

        setTotalPages(nbPages ?? 1)

        const suggestions = hits
          .map((hit) =>
            parseSearchSuggestionFromHit(lang, hit as unknown as Hit)
          )
          .filter((suggestion) => !isNull(suggestion))

        setSearchSuggestions((prev) =>
          isNewSearch ? suggestions : [...prev, ...suggestions]
        )
      } catch (error) {
        // Ignore abort error
        if (error instanceof Error && error.name === 'AbortError') {
          return
        }
        console.error('Algolia search error:', error)
        setError(error instanceof Error ? error : new Error('Unknown error'))
        if (isNewSearch) {
          setSearchSuggestions([])
        }
      } finally {
        setIsLoading(false)
      }
    },
    [lang]
  )

  const debouncedSearchRef = useRef(
    debounce((query: string, searchFn: typeof handleSearchSuggestions) => {
      currentQueryRef.current = query
      searchFn(query, 0, true)
    }, DEBOUNCE_SEARCH_DELAY)
  )

  const handleSearchQueryChange = useCallback(
    (value: string) => {
      setPage(0)
      setTotalPages(1)
      setSearchQuery(value)

      if (!value) {
        debouncedSearchRef.current.cancel()
        setSearchSuggestions([])
        setIsLoading(false)
        currentQueryRef.current = ''
        return
      }

      debouncedSearchRef.current(value, handleSearchSuggestions)
    },
    [handleSearchSuggestions]
  )

  const handleLoadMore = useCallback(() => {
    if (isLoading || page + 1 >= totalPages) {
      return
    }

    const nextPage = page + 1
    setPage(nextPage)
    handleSearchSuggestions(searchQuery, nextPage, false)
  }, [handleSearchSuggestions, isLoading, page, searchQuery, totalPages])

  const [searchSuggestions, setSearchSuggestions] = useState<
    Array<SearchSuggestion>
  >([])

  // Cleanup on unmount
  useEffect(() => {
    const debouncedSearch = debouncedSearchRef.current
    const abortController = abortControllerRef.current

    return () => {
      if (abortController) {
        abortController.abort()
      }
      debouncedSearch.cancel()
    }
  }, [])

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

  const hasMore = page + 1 < totalPages

  return {
    searchQuery,
    handleSearchQueryChange,
    searchSuggestions,
    handleSearchSuggestions,
    handleNavigateSearchPage,
    handleNavigateSuggestionObject,
    handleLoadMore,
    isLoading,
    error,
    hasMore,
  }
}
