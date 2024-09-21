'use client' // for importing mock data

import { Stack } from '@mui/material'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'

export default function Bill() {
  return (
    <Stack gap={6}>
      <BillInfoSection bill={BILL_DATA_MOCK[0]} />
      <BillListSection />
    </Stack>
  )
}
