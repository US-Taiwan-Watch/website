import React, { useState } from 'react'
import {
  SearchSuggestion,
  SearchSuggestionInput,
  SearchSuggestionUtils,
} from '@/modules/Search/business/SearchSuggestion'

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
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value)
  }

  const [searchSuggestions, setSearchSuggestions] = useState<
    Array<SearchSuggestion>
  >([])

  const handleSearchSuggestions = () => {
    setSearched(true)
    setSearchSuggestions(
      MOCK_SEARCH_SUGGESTIONS.map((suggestion) =>
        SearchSuggestionUtils.parse(suggestion)
      )
    )
    // setSearchSuggestions([])
  }

  return {
    searched,
    searchQuery,
    handleSearchQueryChange,
    searchSuggestions,
    handleSearchSuggestions,
  }
}
