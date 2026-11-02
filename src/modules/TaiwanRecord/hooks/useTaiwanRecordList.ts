import { useLazyQuery } from '@apollo/client/react'
import { usePagination } from '@/common/components/atoms/UPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import {
  TaiwanRecord,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import { QUERY_PEOPLE_PUBLISHED_TAIWAN_RECORDS } from '@/modules/TaiwanRecord/graphql/gql'
import type {
  QueryPeoplePublishedTaiwanRecordsQuery,
  QueryPeoplePublishedTaiwanRecordsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { isNull, isNumber } from 'lodash-es'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'

/** Taiwan Record list page size */
const TAIWAN_RECORD_LIST_COUNT = 10

export interface UseTaiwanRecordListOptions {
  /** People ID to filter records */
  peopleId: string
  /** Sort order (default: '-createdAt' for descending) */
  sort?: string
}

export default function useTaiwanRecordList({
  peopleId,
  sort = '-createdAt',
}: UseTaiwanRecordListOptions) {
  const { lang } = useParams<{ lang: Language }>()
  const { isMobile } = useResponsive()
  const { totalPages, setTotalPages, page, handlePageChange, resetPagination } =
    usePagination()

  // Separate pagination and filter variables (following BillList pattern)
  const paginationVariables = useMemo<
    Pick<QueryPeoplePublishedTaiwanRecordsQueryVariables, 'limit' | 'page'>
  >(() => {
    return {
      limit: TAIWAN_RECORD_LIST_COUNT,
      page,
    }
  }, [page])

  const filterVariables = useMemo<
    Pick<QueryPeoplePublishedTaiwanRecordsQueryVariables, 'peopleId' | 'sort'>
  >(() => {
    return {
      peopleId,
      sort,
    }
  }, [peopleId, sort])

  const [getTaiwanRecords, { data, loading }] = useLazyQuery<
    QueryPeoplePublishedTaiwanRecordsQuery,
    QueryPeoplePublishedTaiwanRecordsQueryVariables
  >(QUERY_PEOPLE_PUBLISHED_TAIWAN_RECORDS)

  // Desktop: replace data, Mobile: append data
  const shouldAppendData = useMemo(() => isMobile, [isMobile])
  const [records, setRecords] = useState<TaiwanRecord[]>([])

  // Update records when data changes
  useEffect(() => {
    if (!data?.TaiwanRecords?.docs) return

    try {
      const newRecords = data.TaiwanRecords.docs
        .filter((doc) => !isNull(doc))
        .map((doc) => TaiwanRecordUtils.parse(lang, doc))

      const currentTotalPages = isNumber(data.TaiwanRecords.totalPages)
        ? data.TaiwanRecords.totalPages
        : totalPages

      setRecords((prevRecords) => {
        if (shouldAppendData) {
          // Mobile: Append with deduplication (following useArticleSearch pattern)
          const existingIds = new Set(prevRecords.map((record) => record.id))
          const deduplicatedNewRecords = newRecords.filter(
            (record) => !existingIds.has(record.id)
          )
          return [
            ...(data.TaiwanRecords?.page === 1 ? [] : prevRecords),
            ...deduplicatedNewRecords,
          ]
        } else {
          // Desktop: Replace data (clear on page change)
          return newRecords
        }
      })
      setTotalPages(currentTotalPages)
    } catch (error) {
      console.error(
        'Failed to parse Taiwan Records in useTaiwanRecordList:',
        error
      )
      // Keep previous records on error
    }
  }, [lang, data, shouldAppendData, totalPages, setTotalPages])

  // Execute query when variables change
  useEffect(() => {
    if (!peopleId) return // Don't query without peopleId

    getTaiwanRecords({
      variables: {
        ...paginationVariables,
        ...filterVariables,
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationVariables, filterVariables, peopleId])

  const resetRecords = useCallback(() => {
    setRecords([])
    resetPagination()
  }, [resetPagination])

  return {
    records,
    loading,
    totalPages,
    totalDocs: data?.TaiwanRecords?.totalDocs ?? 0,
    page,
    handlePageChange,
    shouldAppendData,
    resetRecords,
    hasMore: data?.TaiwanRecords?.hasNextPage ?? false,
  }
}
