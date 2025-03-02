'use client'

import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import {
  BillsQuery,
  BillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { BillFilterUtils } from '@/modules/Bill/business/BillFilter'
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import { BillFilterOutput } from '@/modules/Bill/components/BillFilter/schema'
import { QUERY_BILLS } from '@/modules/Bill/graphql/gql'
import { ROUTES } from '@/routes'
import { useQuery } from '@apollo/client'
import { Stack } from '@mui/material'
import { isNull } from 'lodash-es'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useMemo, useEffect } from 'react'

export default function BillList() {
  const router = useRouter()
  const { lang } = useParams<{ lang: Language }>()

  const params = useSearchParams()

  const filterInitValues = useMemo<BillFilterOutput>(() => {
    return BillFilterUtils.transformQueryVariablesToFilter({
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

  const { data, refetch } = useQuery<BillsQuery, BillsQueryVariables>(
    QUERY_BILLS
  )

  useEffect(() => {
    if (data?.Bills?.totalPages) {
      setTotalPages(data.Bills.totalPages)
    }
  }, [data?.Bills?.totalPages, setTotalPages])

  const bills = useMemo(() => {
    return (
      data?.Bills?.docs
        ?.filter((bill) => !isNull(bill))
        .map((bill) => BillUtils.parse(lang, bill)) ?? []
    )
  }, [data?.Bills?.docs, lang])

  const onFilterSubmit = useCallback(
    (filter: BillFilterOutput) => {
      refetch(BillFilterUtils.transformFilterToQueryVariables(filter))
      // TODO: 更新 URL
      const urlQuery = new URLSearchParams(
        BillFilterUtils.transformFilterToUrlQueryString(filter)
      )

      router.push(`${ROUTES.BILL_LIST}?${urlQuery.toString()}`)
    },
    [refetch, router]
  )

  useEffect(() => {
    if (Object.keys(filterInitValues).length > 0) {
      onFilterSubmit(filterInitValues)
    }
  }, [filterInitValues, onFilterSubmit])

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
