'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import OpinionLandingBannerCard from '@/modules/Opinion/components/OpinionLanding/OpinionLandingBannerCard'
import { Box, useTheme } from '@mui/material'

interface OpinionLandingBannerCardsProps {
  opinions: Opinion[]
}

const OpinionLandingBannerCards = ({
  opinions,
}: OpinionLandingBannerCardsProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box padding={theme.spacing(6, 0)}>
      <Carousel renderPagination={(props) => <DotPagination {...props} />}>
        {opinions.map((opinion) => (
          <OpinionLandingBannerCard key={opinion.id} opinion={opinion} />
        ))}
      </Carousel>
    </Box>
  )
}

export default OpinionLandingBannerCards
