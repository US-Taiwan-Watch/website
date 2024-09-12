'use client'

import { Box, Stack, Typography } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { useTheme } from '@mui/material/styles'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'

const StyledHighlightText = styled('span')(({ theme }) => ({
  color: theme.color.orange[900],
}))

const FreeUsageSection = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper backgroundColor={theme.color.lime[500]}>
      <Stack gap={4}>
        <Typography variant='h2' whiteSpace='pre-line'>
          {'Stay Updated On The\nLatest '}
          <StyledHighlightText>
            Taiwan-US
          </StyledHighlightText>
          {' News.'}
        </Typography>
        <Box>
          {/* TODO: 等之後有 Create Account 頁面，要連過去 */}
          <UButton variant="contained" color="info" rounded size="large" endIcon={<ArrowForwardIcon />}>
            Join Today
          </UButton>
        </Box>
      </Stack>
      <Image
        src="/assets/free-usage-section.png"
        alt="Free Usage Section"
        width={1340}
        height={464}
        layout="responsive"
      />
    </LandingSectionWrapper>
  )
}

export default FreeUsageSection
