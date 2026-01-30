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
  SearchTotalQuery,
  SearchTotalQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import { QUERY_SEARCH, QUERY_SEARCH_TOTAL } from '@/modules/Search/graphql/gql'
import { Language } from '@/common/lib/i18n/types'
import { Box, Stack, Typography, Skeleton } from '@mui/material'
import useSearchResultsStore from '@/modules/Search/hooks/useSearchResultsStore'
import SearchResultTypeTabs from '@/modules/Search/components/SearchResultTypeTabs'
import ResultCard, {
  ResultCardSkeleton,
} from '@/modules/Search/components/ResultCard'
import SearchPageSearchBar from '@/modules/Search/components/SearchPageSearchBar'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const SearchPageSkeleton = () => {
  return (
    <Stack gap={2}>
      {/** Tabs Skeleton */}
      <Stack direction="row" gap={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            width={100}
            height={40}
            sx={{ borderRadius: '50px' }}
          />
        ))}
      </Stack>
      {/** Result Card Skeleton */}
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
  const setSearchResults = useSearchResultsStore.use.setSearchResults()
  const parsedSearchResults = useSearchResultsStore.use.parsedSearchResults()
  const searchResultTotalMap = useSearchResultsStore.use.searchResultTotalMap()
  const setSearchResultTotalMap =
    useSearchResultsStore.use.setSearchResultTotalMap()
  const totalCount = useMemo(() => {
    if (!searchResultTotalMap) return 0
    return (
      searchResultTotalMap.people +
      searchResultTotalMap.bills +
      searchResultTotalMap.articles +
      searchResultTotalMap.ketagalans
    )
  }, [searchResultTotalMap])
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

  const [search, { loading: isSearchLoading }] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(QUERY_SEARCH, {
    fetchPolicy: 'network-only',
  })

  const [searchTotal] = useLazyQuery<
    SearchTotalQuery,
    SearchTotalQueryVariables
  >(QUERY_SEARCH_TOTAL, {
    fetchPolicy: 'network-only',
  })

  const handleSearch = useCallback(
    async (queryVariables: SearchQueryVariables) => {
      if (!queryVariables.search) return

      // Clear previous results before fetching
      setSearchResults(null)
      setSearchResultTotalMap(null)

      const [searchResult, totalResult] = await Promise.all([
        search({ variables: queryVariables }),
        searchTotal({ variables: { search: queryVariables.search } }),
      ])

      // Handle search results directly from Promise return
      if (searchResult.data?.Search) {
        setSearchResults(
          SearchResultsUtils.parse(lang, searchResult.data.Search)
        )
        setTotalPages(
          SearchResultsUtils.getTotalPages(searchResult.data.Search)
        )
      }

      // Handle total counts directly from Promise return
      if (totalResult.data?.Search) {
        setSearchResultTotalMap({
          people: totalResult.data.Search.people?.count ?? 0,
          bills: totalResult.data.Search.bill?.count ?? 0,
          articles: totalResult.data.Search.ustwArticle?.count ?? 0,
          ketagalans: totalResult.data.Search.ketagalanArticle?.count ?? 0,
        })
      }
    },
    [
      lang,
      search,
      searchTotal,
      setSearchResults,
      setSearchResultTotalMap,
      setTotalPages,
    ]
  )

  useEffect(() => {
    handleSearch(queryVariables)
  }, [handleSearch, queryVariables])

  return (
    <Stack gap={2} py={2}>
      <Typography>
        {isSearchLoading
          ? t('page.loading.title')
          : t('page.title', {
              page,
              totalCount,
              query,
            })}
      </Typography>

      {/** Search Bar */}
      <SearchPageSearchBar
        defaultValue={query ?? ''}
        disabled={isSearchLoading}
      />

      {isSearchLoading ? (
        <SearchPageSkeleton />
      ) : (
        <>
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
                  // scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  handlePageChange(page)
                }}
              />
            )}
          </Box>
        </>
      )}
    </Stack>
  )
}
