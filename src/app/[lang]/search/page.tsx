'use client'

import { useLazyQuery } from '@apollo/client'
import { useCallback, useEffect, useState, useMemo } from 'react'
import {
  SearchResultType,
  SearchResultsUtils,
} from '@/modules/Search/business/SearchResult'
import { useSearchParams } from 'next/navigation'
import {
  SearchQuery,
  SearchQueryVariables,
  Search as ApiSearch,
} from '@/common/lib/graphql/__generated__/graphql'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import { QUERY_SEARCH } from '@/modules/Search/graphql/gql'
import { Language } from '@/common/lib/i18n/types'
import { Box, Stack, Typography } from '@mui/material'
import useSearchResultsStore from '@/modules/Search/hooks/useSearchResultsStore'
import SearchResultTypeTabs from '@/modules/Search/components/SearchResultTypeTabs'
import ResultCard, {
  ResultCardSkeleton,
} from '@/modules/Search/components/ResultCard'

interface SearchPageProps {
  lang: Language
}

export default function SearchPage({ lang }: SearchPageProps) {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  /// //// Search Result ///////
  const [currentSearchResultType, setCurrentSearchResultType] =
    useState<SearchResultType | null>(null)
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()
  const searchResults = useSearchResultsStore.use.searchResults()
  const setSearchResults = useSearchResultsStore.use.setSearchResults()
  const parsedSearchResults = useSearchResultsStore.use.parsedSearchResults()
  const totalCount = useMemo(() => {
    if (!searchResults) return 0
    return (
      searchResults.people.total +
      searchResults.bills.total +
      searchResults.articles.total +
      searchResults.ketagalans.total
    )
  }, [searchResults])
  const queryVariables = useMemo<SearchQueryVariables>(
    () => ({
      search: query ?? '',
      page,
      limit: SearchResultsUtils.PAGE_SIZE,
      filter: SearchResultsUtils.mapApiFilterType(currentSearchResultType),
    }),
    [query, page, currentSearchResultType]
  )
  const [search, { loading: isSearchLoading, data: searchQueryData }] =
    useLazyQuery<SearchQuery, SearchQueryVariables>(QUERY_SEARCH, {
      fetchPolicy: 'network-only',
    })

  const handleSearch = useCallback(async () => {
    if (!queryVariables.search) return

    await search({ variables: queryVariables })
  }, [queryVariables, search])

  useEffect(() => {
    if (!searchQueryData || !searchQueryData.Search) return
    setSearchResults(
      SearchResultsUtils.parse(lang, searchQueryData.Search as ApiSearch)
    ) // FIXME: The type is not correct

    setTotalPages(
      SearchResultsUtils.getTotalPages(searchQueryData.Search as ApiSearch)
    ) // FIXME: The type is not correct
  }, [lang, searchQueryData, setSearchResults, setTotalPages])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  if (isSearchLoading) {
    return (
      <Stack gap={2} py={2}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ResultCardSkeleton key={index} />
        ))}
      </Stack>
    )
  }

  return (
    <Stack gap={2} py={2}>
      <Typography>
        Showing search result page {page}. There are {totalCount} results for “
        {query}” .
      </Typography>
      <SearchResultTypeTabs
        value={currentSearchResultType}
        onTabClick={(value) => {
          if (value === currentSearchResultType) return

          setCurrentSearchResultType(value)
          setSearchResults(null)
          handlePageChange(1)
        }}
      />
      <Stack
        gap={{
          xs: 1,
          lg: 2,
        }}
      >
        {parsedSearchResults.map((result) => (
          <ResultCard key={result.value.id} result={result} />
        ))}
      </Stack>
      <Box display="flex" justifyContent="center">
        {totalPages > 1 && (
          <UPagination
            count={totalPages}
            page={page}
            onChange={(_, page) => {
              setSearchResults(null)
              handlePageChange(page)
            }}
          />
        )}
      </Box>
    </Stack>
  )
}
