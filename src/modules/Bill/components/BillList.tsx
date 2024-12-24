'use client'

import UPagination from '@/common/components/atoms/UPagination'
import { Language } from '@/common/lib/i18n/types'
import { Bill } from '@/modules/Bill/classes/Bill'
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import {
  billFilterSchema,
  BillFilterInput,
  BillFilterOutput,
} from '@/modules/Bill/components/BillFilter/schema'
import { BILL_DTO_MOCK } from '@/modules/Bill/dtoData'
import { Stack } from '@mui/material'
import { useParams, useSearchParams } from 'next/navigation'
import { useCallback, useMemo, useEffect } from 'react'

export default function BillList() {
  const { lang } = useParams<{ lang: Language }>()
  const bills = BILL_DTO_MOCK.map((bill) => Bill.fromDTO(lang, bill))

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
      <UPagination count={10} page={1} onChange={() => {}} />
    </Stack>
  )
}
