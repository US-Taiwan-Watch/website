'use client' // for importing mock data

import { Stack } from '@mui/material'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'
import BillContentSection from '@/modules/Bill/components/SingleBill/BillContentSection'

const bill = BILL_DATA_MOCK[0]

export default function Bill() {
  return (
    <Stack gap={6}>
      <BillInfoSection bill={bill} />
      <BillContentSection bill={bill} />
      <BillListSection />
    </Stack>
  )
}
