'use client'

import { ThemeProvider, Typography } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { USTWTheme, createUSTWTheme } from '@/common/lib/mui/theme'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { useTheme } from '@mui/material/styles'

const KetagalanSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    // NOTE: Ketagalan is English only
    <ThemeProvider theme={createUSTWTheme('ketagalan', 'en-US')}>
      <LandingSectionWrapper
        backgroundColor={theme.color.grey[1300]}
        contentWrapperSx={{ paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px` }}
      >
        <SectionTitleWithLink renderTitle={() => <UKetagalanLogo />} />
        <Typography color='white'>
          TODO: Ketagalan Media Cards Here
        </Typography>
      </LandingSectionWrapper>
    </ThemeProvider>
  )
}

export default KetagalanSection
