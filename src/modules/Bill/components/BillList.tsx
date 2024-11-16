'use client'

import UPagination from '@/common/components/atoms/UPagination'
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import {
  billFilterSchema,
  BillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import { Stack } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export default function BillList() {
  const params = useSearchParams()

  const filterInitValues = useMemo<BillFilterInput>(() => {
    const category = params.get('category')
    const congress = params.get('congress')
    const result = billFilterSchema.safeParse({
      ...(category && { category: Number(category) }),
      ...(congress && { congress: [Number(congress)] }),
    })
    return result.success ? result.data : {}
  }, [params])

  console.log('filterInitValues', filterInitValues)

  return (
    <Stack gap={7} alignItems="center" pb={10}>
      <Stack gap={5} alignItems="center">
        <BillFilter
          onSubmit={(filter) => {
            console.log(`call API with \n`, JSON.stringify(filter, null, 2))
          }}
          initialValues={filterInitValues}
        />
        <Stack gap={2}>
          {BILL_DATA_MOCK.map((bill, index) => (
            <BillCard key={index} mode="horizontal" bill={bill} />
          ))}
        </Stack>
      </Stack>
      <UPagination count={10} page={1} onChange={() => {}} />
    </Stack>
  )
}
