import BillListSection from '@/modules/Bill/components/BillLanding/BillListSection'
import BillStatisticsSection from '@/modules/Bill/components/BillLanding/BillStatisticsSection'
import { Stack } from '@mui/material'

export default function Bill() {
  return (
    <Stack gap={10}>
      <BillStatisticsSection />
      <BillListSection />
    </Stack>
  )
}
