'use client'

import { ThemeProvider, Typography } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { createUSTWTheme } from '@/common/lib/mui/theme'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'

const KetagalanSection = () => {
  return (
    // NOTE: Ketagalan is English only
    <ThemeProvider theme={createUSTWTheme('ketagalan', 'en-US')}>
      {/* FIXME: 顏色需加入 theme */}
      <LandingSectionWrapper
        backgroundColor='#262121'
        contentWrapperSx={{ paddingBottom: OVERLAPPED_SECTION_PADDING_BOTTOM }}
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
