'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UContainer from '@/common/components/atoms/UContainer'

const Stroke = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.8}
    >
      <path
        d="M-31.9163 87.3121C335.582 202.818 560.041 -19.5063 665.515 22.7477C742.982 53.783 474.39 195.146 563.964 238.473C659.212 284.543 888.329 89.5521 967.707 115.928C1047.09 142.303 945.034 227.964 959.973 251.614C1003.05 288.93 977.049 295.417 1519.01 348.522"
        stroke="#D8F501"
        stroke-width="33.6722"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

const MissionHighlightSection = () => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('about_mission')

  return (
    <UFullWidthBackgroundBox>
      <UContainer
        sx={{
          alignItems: 'center',
        }}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          sx={{
            px: {
              xs: 2.75,
              sm: 3.75,
              lg: 3.75,
            },
            py: {
              xs: 2.5,
              sm: 3.75,
              md: 5,
              lg: 7.5,
            },
            borderRadius: '20px',
            backgroundColor: theme.color.grey[400],
            boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            maxWidth: {
              xs: '100%',
              sm: '700px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '1.375rem',
                lg: '2.125rem',
              },
              fontWeight: 600,
              zIndex: 10,
            }}
          >
            {t('slogan', { ns: 'about_mission' })}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '-20px',
                sm: '-30px',
                md: '-40px',
                lg: '-60px',
              },
              left: '50%',
              transform: 'translateX(-50%)',
              width: {
                xs: '180dvw',
                sm: '120dvw',
                md: '100dvw',
              },
              overflow: 'hidden',
              rotate: '-2deg',
            }}
          >
            <Stroke />
          </Box>
        </Box>
      </UContainer>
    </UFullWidthBackgroundBox>
  )
}

export default MissionHighlightSection
