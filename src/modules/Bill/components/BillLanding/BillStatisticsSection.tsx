'use client'

import CongressCard from '@/modules/Bill/components/BillLanding/CongressCard'
import Introduction from '@/modules/Bill/components/BillLanding/Introduction'
import PopularTags from '@/modules/Bill/components/BillLanding/PopularTags'
import SponsorCard from '@/modules/Bill/components/BillLanding/SponsorCard'
import TrendCard from '@/modules/Bill/components/BillLanding/TrendCard'
import { Grid2, Stack } from '@mui/material'

export default function BillStatisticsSection() {
  return (
    <Stack spacing={6}>
      <Introduction />
      <PopularTags />
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <TrendCard />
        </Grid2>
        <Grid2 size={4}>
          <SponsorCard />
        </Grid2>
        <Grid2 size={8}>
          <CongressCard />
        </Grid2>
        <Grid2 size={4}>
          <SponsorCard isCosponsor />
        </Grid2>
      </Grid2>
    </Stack>
  )
}
