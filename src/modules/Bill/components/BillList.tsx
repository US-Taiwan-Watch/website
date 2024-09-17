'use client'

import UPagination from '@/common/components/atoms/UPagination'
import BillCard from '@/modules/Bill/components/BillCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import { Stack } from '@mui/material'

export default function BillList() {
  return (
    <Stack gap={7} alignItems="center" pb={10}>
      <Stack gap={2}>
        {BILL_DATA_MOCK.map((bill, index) => (
          <BillCard key={index} mode="horizontal" bill={bill} />
        ))}
      </Stack>
      <UPagination count={10} page={1} onChange={() => {}} />
    </Stack>
  )
}
