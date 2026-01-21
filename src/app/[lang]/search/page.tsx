'use client'

import { useLazyQuery } from '@apollo/client/react'
import { useCallback, useEffect, useState, useMemo } from 'react'
import {
  SearchResultType,
  SearchResultsUtils,
} from '@/modules/Search/business/SearchResult'
import { useSearchParams } from 'next/navigation'
import {
  SearchQuery,
  SearchQueryVariables,
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
import SearchPageSearchBar from '@/modules/Search/components/SearchPageSearchBar'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

export const dynamic = 'force-dynamic'

const SearchPageSkeleton = () => {
  return (
    <Stack gap={2} py={2}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ResultCardSkeleton key={index} />
      ))}
    </Stack>
  )
}

type SearchPageProps = {
  params: {
    lang: Language
  }
}

export default function SearchPage({ params }: SearchPageProps) {
  const { lang } = params
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const { t } = useTranslationClient('search')

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
  /**
   * 當 searchResultType 或 query 改變時，重置 page 為 1
   */
  useEffect(() => {
    handlePageChange(1)
  }, [currentSearchResultType, query, handlePageChange])

  const [search, { loading: isSearchLoading, data: searchQueryData }] =
    useLazyQuery<SearchQuery, SearchQueryVariables>(QUERY_SEARCH, {
      fetchPolicy: 'network-only',
    })

  const handleSearch = useCallback(async () => {
    if (!queryVariables.search) return

    setSearchResults(null)
    await search({ variables: queryVariables })
  }, [queryVariables, search, setSearchResults])

  useEffect(() => {
    if (!searchQueryData || !searchQueryData.Search) return

    setSearchResults(SearchResultsUtils.parse(lang, searchQueryData.Search))

    setTotalPages(SearchResultsUtils.getTotalPages(searchQueryData.Search))
  }, [lang, searchQueryData, setSearchResults, setTotalPages])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  if (isSearchLoading) {
    return <SearchPageSkeleton />
  }

  return (
    <Stack gap={2} py={2}>
      <Typography>
        {t('page.title', {
          page,
          totalCount,
          query,
        })}
      </Typography>

      {/** Search Bar */}
      <SearchPageSearchBar />

      <SearchResultTypeTabs
        value={currentSearchResultType}
        onTabClick={(value) => {
          if (value === currentSearchResultType) return

          setCurrentSearchResultType(value)
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
              handlePageChange(page)
            }}
          />
        )}
      </Box>
    </Stack>
  )
}
