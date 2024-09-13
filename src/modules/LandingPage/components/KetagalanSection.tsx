'use client'

import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { USTWTheme } from '@/common/lib/mui/theme'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { useTheme } from '@mui/material/styles'
import KetagalanMediaCard from '@/modules/KetagalanMedia/components/KetagalanMediaCard'
import ketagalanMediaMockData from '@/modules/KetagalanMedia/data'
import { Grid } from '@mui/material'

const KetagalanSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.grey[1300]}
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink renderTitle={() => <UKetagalanLogo />} />
      <Grid container spacing={5}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <KetagalanMediaCard media={ketagalanMediaMockData} />
          </Grid>
        ))}
      </Grid>
    </LandingSectionWrapper>
  )
}

export default KetagalanSection
