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

  const handleSearchSuggestions = debounce((query: string) => {
    console.log('query', query)

    if (!query) {
      setSearchSuggestions([])
      return
    }

    setSearchSuggestions(
      MOCK_SEARCH_SUGGESTIONS.map((suggestion) =>
        SearchSuggestionUtils.parse(suggestion)
      )
    )
    // setSearchSuggestions([])
  }, 500)

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
    handleSearchQueryChange,
    searchSuggestions,
    handleSearchSuggestions,
    handleNavigateSearchPage,
  }
}
