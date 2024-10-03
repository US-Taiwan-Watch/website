'use client'

import UPagination from '@/common/components/atoms/UPagination'
import BillCard from '@/modules/Bill/components/BillCard'
import BillFilter from '@/modules/Bill/components/BillFilter'
import useBillFilter from '@/modules/Bill/components/BillFilter/useBillFilter'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import { Stack } from '@mui/material'

export default function BillList() {
  const { filterState, handleFilterChange, handleReset } = useBillFilter()

  return (
    <Stack gap={7} alignItems="center" pb={10}>
      <Stack gap={5} alignItems="center">
        <BillFilter
          filterState={filterState}
          handleFilterChange={handleFilterChange}
          handleReset={handleReset}
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
