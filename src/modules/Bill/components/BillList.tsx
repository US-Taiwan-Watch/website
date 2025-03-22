'use client'

import UHStack from '@/common/components/atoms/UHStack'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import {
  BillsFilterQuery,
  BillsFilterQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { BillsFilterUtils } from '@/modules/Bill/business/BillsFilter'
import BillCard, { BillCardSkeleton } from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import { BillFilterOutput } from '@/modules/Bill/components/BillFilter/schema'
import { QUERY_BILL_FILTER } from '@/modules/Bill/graphql/gql'
import { ROUTES } from '@/routes'
import { useLazyQuery } from '@apollo/client'
import { Stack, Typography } from '@mui/material'
import { isNull, isNumber } from 'lodash-es'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useMemo, useEffect, useState } from 'react'

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
  const router = useRouter()
  const { lang } = useParams<{ lang: Language }>()

  const params = useSearchParams()

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

  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

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

  useEffect(() => {
    if (isNumber(data?.BillsFilter?.totalPages)) {
      setTotalPages(data.BillsFilter.totalPages)
    }
  }, [data?.BillsFilter?.totalPages, setTotalPages])

  const bills = useMemo(() => {
    return (
      data?.BillsFilter?.docs
        ?.filter((bill) => !isNull(bill))
        .map((bill) => BillUtils.parse(lang, bill)) ?? []
    )
  }, [data?.BillsFilter?.docs, lang])

  const onFilterSubmit = useCallback(
    (filter: BillFilterOutput) => {
      setFilterVariables(
        BillsFilterUtils.transformFilterToQueryVariables(filter)
      )
      const urlQuery = new URLSearchParams(
        BillsFilterUtils.transformFilterToUrlQueryString(filter)
      )

      router.replace(`${ROUTES.BILL_LIST}?${urlQuery.toString()}`)
    },
    [router]
  )

  useEffect(() => {
    if (Object.keys(filterInitValues).length > 0) {
      onFilterSubmit(filterInitValues)
    }
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
        <Typography variant="h3">Bills and Resolutions in Congress</Typography>
        {isMobile && (
          <BillFilter
            onSubmit={onFilterSubmit}
            initialValues={filterInitValues}
          />
        )}
      </UHStack>
      <Stack width="100%" gap={7} alignItems="center" pb={10}>
        {!isMobile && (
          <BillFilter
            onSubmit={onFilterSubmit}
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
        {!loading && totalPages > 1 && (
          <UPagination
            count={totalPages}
            page={page}
            onChange={(_, page) => handlePageChange(page)}
          />
        )}
      </Stack>
    </Stack>
  )
}
