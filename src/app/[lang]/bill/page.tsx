import BillApi from '@/modules/Bill/api/BillApi'
import BillListSection from '@/modules/Bill/components/BillLanding/BillListSection'
import BillStatisticsSection from '@/modules/Bill/components/BillLanding/BillStatisticsSection'
import Stack from '@mui/material/Stack'

/**
 * 最新法案數量
 */
const LATEST_BILLS_COUNT = 5

/**
 * 熱門法案數量
 */
const POPULAR_BILLS_COUNT = 5

export default async function Bill() {
  const latestBills = await BillApi.getLatestBills({
    limit: LATEST_BILLS_COUNT,
  })
  const popularBills = await BillApi.getPopularBills({
    limit: POPULAR_BILLS_COUNT,
  })

  return (
    <Stack gap={10}>
      <BillStatisticsSection />
      <BillListSection latestBills={latestBills} popularBills={popularBills} />
    </Stack>
  )
}
