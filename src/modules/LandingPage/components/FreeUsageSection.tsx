'use client'

import { Box, Stack, Typography } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { useTheme } from '@mui/material/styles'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
import { Trans } from 'react-i18next'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledHighlightText = styled('span')(({ theme }) => ({
  color: theme.color.orange[900],
}))

const StyledImage = styled(Image)(() => ({}))

const FreeUsageSection = () => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('home')

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.lime[500]}
      isHeaderWidth
    >
      <Stack gap={4}>
        <Typography
          variant="h2"
          whiteSpace="pre-line"
          maxWidth={{
            xs: '100%',
            sm: '60%',
          }}
        >
          <Trans
            i18nKey="section.freeUsage.slogan"
            t={t}
            ns="home"
            components={{
              highlight: <StyledHighlightText />,
            }}
          />
        </Typography>
        <Box>
          {/* TODO: 等之後有 Create Account 頁面，要連過去 */}
          <UButton
            variant="contained"
            color="info"
            rounded
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            {t('section.freeUsage.cta.joinToday', { ns: 'home' })}
          </UButton>
        </Box>
      </Stack>
      <Box
        sx={{
          height: {
            xs: '300px',
            sm: '483px',
          },
        }}
      >
        <StyledImage
          src="/assets/free-usage-section.png"
          alt="Free Usage Section"
          width={1340}
          height={464}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
      </Box>
    </LandingSectionWrapper>
  )
}

export default FreeUsageSection
