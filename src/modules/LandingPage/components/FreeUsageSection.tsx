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
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'

const StyledHighlightText = styled('span')(({ theme }) => ({
  color: theme.color.orange[900],
}))

const StyledImage = styled(Image)(() => ({}))

const FreeUsageSection = () => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('home')
  const { resolveRouteUrl } = useURouterClient()
  const { login } = useUAuth()

  const handleJoinTodayClick = () => {
    login({
      returnTo: resolveRouteUrl({ name: RouteName.Account }),
    })
  }

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
          <UButton
            variant="contained"
            color="info"
            rounded
            size="large"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  width: { xs: 16, sm: 24 },
                  height: { xs: 16, sm: 24 },
                }}
              />
            }
            onClick={handleJoinTodayClick}
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
