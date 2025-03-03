import CongressCard from '@/modules/Bill/components/BillLanding/CongressCard'
import Introduction from '@/modules/Bill/components/BillLanding/Introduction'
import PopularTags from '@/modules/Bill/components/BillLanding/PopularTags'
import SponsorCard from '@/modules/Bill/components/BillLanding/SponsorCard'
import TrendCard from '@/modules/Bill/components/BillLanding/TrendCard'
import { Grid2, Stack } from '@mui/material'
import BillApi from '@/modules/Bill/api/BillApi'

/**
 * 贊成法案最多的前 5 名議員
 */
const TOP_SPONSORS_LIMIT = 5

/**
 * 反對法案最多的前 5 名議員
 */
const TOP_COSPONSORS_LIMIT = 5

export default async function BillStatisticsSection() {
  const sponsors = await BillApi.getTopSponsors({
    limit: TOP_SPONSORS_LIMIT,
  })

  const cosponsors = await BillApi.getTopCosponsors({
    limit: TOP_COSPONSORS_LIMIT,
  })

  return (
    <Stack spacing={6}>
      <Introduction />
      <PopularTags />
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <TrendCard />
        </Grid2>
        <Grid2 size={4}>
          <SponsorCard sponsorsData={sponsors} />
        </Grid2>
        <Grid2 size={8}>
          <CongressCard />
        </Grid2>
        <Grid2 size={4}>
          <SponsorCard isCosponsor sponsorsData={cosponsors} />
        </Grid2>
      </Grid2>
    </Stack>
  )
}
