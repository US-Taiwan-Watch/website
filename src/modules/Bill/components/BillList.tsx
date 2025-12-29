'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULoadMoreButton from '@/common/components/atoms/ULoadMoreButton'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import {
  BillsFilterQuery,
  BillsFilterQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Language } from '@/common/lib/i18n/types'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { BillsFilterUtils } from '@/modules/Bill/business/BillsFilter'
import BillCard, { BillCardSkeleton } from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import { BillFilterOutput } from '@/modules/Bill/components/BillFilter/schema'
import { QUERY_BILL_FILTER } from '@/modules/Bill/graphql/gql'
import { useLazyQuery } from '@apollo/client'
import { Stack, Typography } from '@mui/material'
import { isEqual, isNull, isNumber } from 'lodash-es'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useMemo, useEffect, useState, useRef } from 'react'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const BillCardsSkeleton = () => {
  const { isMobile } = useResponsive()
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <BillCardSkeleton
          key={index}
          mode={isMobile ? 'vertical' : 'horizontal'}
        />
      ))}
    </>
  )
}

/** 法案列表呈現數量 */
const BILL_LIST_COUNT = 10

export default function BillList() {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')
  const router = useRouter()
  const { lang } = useParams<{ lang: Language }>()
  const { resolveRouteUrl } = useURouterClient()
  const params = useSearchParams()

  /**
   * 避免 `router.replace` 後，
   * `searchParams` 的值會變動，
   * 導致 `filterInitValues` 的值會變動，
   * 進而導致 `Maximum update depth exceeded` 的錯誤
   */
  const existedFilterInitValues = useRef<BillFilterOutput | null>(null)
  const filterInitValues = useMemo<BillFilterOutput>(() => {
    return BillsFilterUtils.transformQueryVariablesToFilter({
      category: params.get('category'),
      party: params.get('party'),
      type: params.get('type'),
      congress: params.get('congress'),
      status: params.get('status'),
      sponsor: params.get('sponsor'),
      cosponsor: params.get('cosponsor'),
      tag: params.get('tag'),
      sorter: params.get('sorter'),
    })
  }, [params])

  // Use reducer for clearer state management
  const [bills, setBills] = useState<Bill[]>([])

  const { totalPages, setTotalPages, page, handlePageChange, resetPagination } =
    usePagination()

  const paginationVariables = useMemo<
    Pick<BillsFilterQueryVariables, 'limit' | 'page'>
  >(() => {
    return {
      limit: BILL_LIST_COUNT,
      page,
    }
  }, [page])
  const [filterVariables, setFilterVariables] = useState<
    Omit<BillsFilterQueryVariables, 'limit' | 'page'>
  >({})

  const [getBills, { data, loading }] = useLazyQuery<
    BillsFilterQuery,
    BillsFilterQueryVariables
  >(QUERY_BILL_FILTER)

  // Handle data updates with reducer
  const shouldAppendData = useMemo(() => isMobile, [isMobile])

  useEffect(() => {
    if (!data?.BillsFilter?.docs) return

    try {
      const newBills = data.BillsFilter.docs
        .filter((bill) => !isNull(bill))
        .map((bill) => BillUtils.parse(lang, bill))

      const currentTotalPages = isNumber(data.BillsFilter.totalPages)
        ? data.BillsFilter.totalPages
        : totalPages

      setBills((prevBills) => {
        if (shouldAppendData) {
          return [...prevBills, ...newBills]
        } else {
          return newBills
        }
      })
      setTotalPages(currentTotalPages)
    } catch (error) {
      console.error('Failed to parse bills in BillList:', error)
    }
  }, [data, lang, shouldAppendData, totalPages, setTotalPages])

  const onFilterSubmit = useCallback(
    (filter: BillFilterOutput) => {
      resetPagination()

      setFilterVariables(
        BillsFilterUtils.transformFilterToQueryVariables(filter)
      )
      const urlQuery = new URLSearchParams(
        BillsFilterUtils.transformFilterToUrlQueryString(filter)
      )

      router.replace(
        resolveRouteUrl({
          name: RouteName.BillList,
          query: Object.fromEntries(urlQuery.entries()),
        }),
        {
          scroll: false,
        }
      )
    },
    [router, resolveRouteUrl, resetPagination]
  )

  useEffect(() => {
    if (isEqual(existedFilterInitValues.current, filterInitValues)) return
    if (Object.keys(filterInitValues).length === 0) return

    onFilterSubmit(filterInitValues)
    existedFilterInitValues.current = filterInitValues
  }, [filterInitValues, onFilterSubmit])

  useEffect(() => {
    getBills({
      variables: {
        ...paginationVariables,
        ...filterVariables,
      },
    })
  }, [paginationVariables, filterVariables, getBills])

  return (
    <Stack gap={5}>
      <UHStack gap={2} alignItems="flex-start">
        <Typography variant="h3">
          {t('billList.title', {
            ns: 'bill',
          })}
        </Typography>
        {isMobile && (
          <BillFilter
            onSubmit={(filter) => {
              onFilterSubmit(filter)
            }}
            initialValues={filterInitValues}
          />
        )}
      </UHStack>
      <Stack width="100%" gap={7} alignItems="center" pb={10}>
        {!isMobile && (
          <BillFilter
            onSubmit={(filter) => {
              onFilterSubmit(filter)
            }}
            initialValues={filterInitValues}
          />
        )}

        <Stack width="100%" gap={2}>
          {loading ? (
            <BillCardsSkeleton />
          ) : (
            bills.map((bill, index) => (
              <BillCard
                key={index}
                mode={isMobile ? 'vertical' : 'horizontal'}
                bill={bill}
              />
            ))
          )}
        </Stack>

        {/** Infinite Scroll (Mobile) */}
        {shouldAppendData && bills.length > 0 && (
          <ULoadMoreButton
            loading={loading}
            onLoadMore={() => handlePageChange(page + 1)}
            hasMore={page < totalPages}
          />
        )}

        {/** Pagination (Desktop) */}
        {!shouldAppendData && totalPages > 1 && (
          <UPagination
            count={totalPages}
            page={page}
            onChange={(_, page) => {
              handlePageChange(page)
            }}
          />
        )}
      </Stack>
    </Stack>
  )
}
