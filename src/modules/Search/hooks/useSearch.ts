import { useCallback, useState } from 'react'
import {
  SearchSuggestion,
  SearchSuggestionInput,
  SearchSuggestionUtils,
} from '@/modules/Search/business/SearchSuggestion'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { useRouter } from 'next/navigation'
import { RouteName } from '@/common/lib/router/routes'
import { debounce } from 'lodash-es'
import {
  googleAnalyticsSearchEvent,
  googleAnalyticsSearchSuggestionEvent,
} from '@/common/lib/googleAnalytics'

const MOCK_SEARCH_SUGGESTIONS: Array<SearchSuggestionInput> = [
  { value: 'test' },
  { value: 'test2' },
  { value: 'test3' },
  { value: 'test4' },
  { value: 'test5' },
  { value: 'test6' },
  { value: 'test7' },
  { value: 'test8' },
  { value: 'test9' },
  { value: 'test10' },
]

export default function useSearch() {
  const { resolveRouteUrl } = useURouterClient()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchSuggestions = useCallback((query: string) => {
    if (!query) {
      setSearchSuggestions([])
      return
    }

    /** 記錄 GA 搜尋建議事件 */
    googleAnalyticsSearchSuggestionEvent({
      searchTerm: query,
    })

    setSearchSuggestions(
      MOCK_SEARCH_SUGGESTIONS.map((suggestion) =>
        SearchSuggestionUtils.parse(suggestion)
      )
    )
    // setSearchSuggestions([])
  }, [])

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

  return {
    searchQuery,
    handleSearchQueryChange: debounce(handleSearchQueryChange, 1000),
    searchSuggestions,
    handleSearchSuggestions,
    handleNavigateSearchPage,
  }
}
