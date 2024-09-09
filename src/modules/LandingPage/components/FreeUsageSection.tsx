'use client'

import { Typography } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'

const FreeUsageSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper backgroundColor={theme.color.lime[500]}>
      <Typography variant='h2' fontWeight={600}>
        TODO: Free Usage
      </Typography>
    </LandingSectionWrapper>
  )
}

export default FreeUsageSection
