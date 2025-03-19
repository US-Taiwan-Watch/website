'use client'

import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { USTWTheme } from '@/common/lib/mui/theme'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { useTheme } from '@mui/material/styles'
import KetagalanMediaCard from '@/modules/KetagalanMedia/components/KetagalanMediaCard'
import { KETAGALAN_MEDIA_MOCK_DATA } from '@/modules/KetagalanMedia/data'
import { Box, Grid2 as Grid } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const KetagalanPostCards = () => {
  return (
    <Grid container rowSpacing={8} columnSpacing={4}>
      {KETAGALAN_MEDIA_MOCK_DATA.map((media) => (
        <Grid
          size={{
            xs: 12,
            sm: 4,
          }}
          key={media.id}
        >
          <KetagalanMediaCard media={media} />
        </Grid>
      ))}
    </Grid>
  )
}

const ScrollableKetagalanPostCards = () => {
  return (
    <Box overflow="auto">
      <UHStack gap={1} width="max-content">
        {KETAGALAN_MEDIA_MOCK_DATA.map((media) => (
          <Box key={media.id} width="80dvw">
            <KetagalanMediaCard media={media} />
          </Box>
        ))}
      </UHStack>
    </Box>
  )
}

const KetagalanSection = () => {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.grey[1300]}
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink renderTitle={() => <UKetagalanLogo />} />
      {isMobile ? <ScrollableKetagalanPostCards /> : <KetagalanPostCards />}
    </LandingSectionWrapper>
  )
}

export default KetagalanSection
