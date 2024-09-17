'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import OpinionLandingBannerCard from '@/modules/Opinion/components/OpinionLanding/OpinionLandingBannerCard'
import { opinion } from '@/modules/Opinion/data'
import { Box, useTheme } from '@mui/material'

const OpinionLandingBannerCards = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box padding={theme.spacing(6, 0)}>
      <Carousel renderPagination={(props) => <DotPagination {...props} />}>
        <OpinionLandingBannerCard opinion={opinion} />
        <OpinionLandingBannerCard opinion={opinion} />
        <OpinionLandingBannerCard opinion={opinion} />
      </Carousel>
    </Box>
  )
}

export default OpinionLandingBannerCards
