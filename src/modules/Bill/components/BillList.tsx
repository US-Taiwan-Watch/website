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
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import {
  billFilterSchema,
  BillFilterInput,
  BillFilterOutput,
} from '@/modules/Bill/components/BillFilter/schema'
import { QUERY_BILLS } from '@/modules/Bill/graphql/gql'
import { useQuery } from '@apollo/client'
import { Stack } from '@mui/material'
import { isNull } from 'lodash-es'
import { useParams, useSearchParams } from 'next/navigation'
import { useCallback, useMemo, useEffect } from 'react'

export default function BillList() {
  const { lang } = useParams<{ lang: Language }>()

  const params = useSearchParams()

  const filterInitValues = useMemo<BillFilterInput>(() => {
    const category = params.get('category')
    const congress = params.get('congress')
    const sponsor = params.get('sponsor')
    const cosponsor = params.get('cosponsor')
    const tag = params.get('tag')
    const sorter = params.get('sorter')
    const result = billFilterSchema.safeParse({
      ...(category && { category: [category] }),
      ...(congress && { congress: [Number(congress)] }),
      ...(sponsor && { sponsors: [sponsor] }),
      ...(cosponsor && { cosponsors: [cosponsor] }),
      ...(tag && { tag: [tag] }),
      ...(sorter && { sorter: Number(sorter) }),
    })
    return result.success ? result.data : {}
  }, [params])

  const onFilterSubmit = useCallback((filter: BillFilterOutput) => {
    console.log(`call API with \n`, JSON.stringify(filter, null, 2))
  }, [])

  useEffect(() => {
    if (Object.keys(filterInitValues).length > 0) {
      onFilterSubmit(filterInitValues)
    }
  }, [filterInitValues, onFilterSubmit])

  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables = useMemo<BillsQueryVariables>(() => {
    return {
      limit: 10,
      page,
      where: {
        // TODO: BillFilterOutput -> Bill_where
      },
    }
  }, [page])

  const { data, refetch } = useQuery<BillsQuery, BillsQueryVariables>(
    QUERY_BILLS,
    {
      variables: queryVariables,
    }
  )

  useEffect(() => {
    if (data?.Bills?.totalPages) {
      setTotalPages(data.Bills.totalPages)
    }
  }, [data?.Bills?.totalPages, setTotalPages])

  useEffect(() => {
    refetch(queryVariables)
  }, [queryVariables, refetch])

  const bills =
    data?.Bills?.docs
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []

  // TODO: loading skeleton

  return (
    <Stack gap={7} alignItems="center" pb={10}>
      <Stack gap={5} alignItems="center">
        <BillFilter
          onSubmit={onFilterSubmit}
          initialValues={filterInitValues}
        />
        <Stack gap={2}>
          {bills.map((bill, index) => (
            <BillCard key={index} mode="horizontal" bill={bill} />
          ))}
        </Stack>
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
