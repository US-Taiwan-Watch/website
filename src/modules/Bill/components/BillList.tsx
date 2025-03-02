'use client'

import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import {
  BillsFilterQuery,
  BillsFilterQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { BillsFilterUtils } from '@/modules/Bill/business/BillsFilter'
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import { BillFilterOutput } from '@/modules/Bill/components/BillFilter/schema'
import { QUERY_BILL_FILTER } from '@/modules/Bill/graphql/gql'
import { ROUTES } from '@/routes'
import { useLazyQuery } from '@apollo/client'
import { Stack } from '@mui/material'
import { isNull } from 'lodash-es'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useMemo, useEffect, useState } from 'react'

export default function BillList() {
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
      limit: 10,
      page,
    }
  }, [page])
  const [filterVariables, setFilterVariables] = useState<
    Omit<BillsFilterQueryVariables, 'limit' | 'page'>
  >({})

  const [getBills, { data }] = useLazyQuery<
    BillsFilterQuery,
    BillsFilterQueryVariables
  >(QUERY_BILL_FILTER)

  useEffect(() => {
    if (data?.BillsFilter?.totalPages) {
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

  // TODO: loading skeleton

  return (
    <Stack width="100%" gap={7} alignItems="center" pb={10}>
      <BillFilter onSubmit={onFilterSubmit} initialValues={filterInitValues} />
      <Stack width="100%" gap={2}>
        {bills.map((bill, index) => (
          <BillCard key={index} mode="horizontal" bill={bill} />
        ))}
      </Stack>
      {totalPages > 1 && (
        <UPagination
          count={totalPages}
          page={page}
          onChange={(_, page) => handlePageChange(page)}
        />
      )}
    </Stack>
  )
}
