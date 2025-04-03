'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { USTWTheme } from '@/common/lib/mui/theme'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useMemo } from 'react'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import type React from 'react'
import UContainer from '@/common/components/atoms/UContainer'
import { ROUTES } from '@/routes'

type AboutHeaderSectionProps = {
  currentPathname: string
}

const AboutHeaderTabsWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return (
      <UFullWidthBackgroundBox
        containerSx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <UContainer
          sx={{
            px: 0,
          }}
        >
          {children}
        </UContainer>
      </UFullWidthBackgroundBox>
    )
  }

  return children
}

const AboutHeaderTabs = ({ currentPathname }: AboutHeaderSectionProps) => {
  const theme = useTheme<USTWTheme>()

  const { t } = useTranslationClient('about')
  const tabs = useMemo(() => {
    return [
      {
        label: t('tabs.mission', { ns: 'about' }),
        path: ROUTES.ABOUT_MISSION,
      },
      {
        label: t('tabs.projects', { ns: 'about' }),
        path: ROUTES.ABOUT_PROJECTS,
      },
      {
        label: t('tabs.members', { ns: 'about' }),
        path: ROUTES.ABOUT_MEMBERS,
      },
      {
        label: t('tabs.footprints', { ns: 'about' }),
        path: ROUTES.ABOUT_FOOTPRINTS,
      },
      {
        label: t('tabs.newsroom', { ns: 'about' }),
        path: ROUTES.ABOUT_NEWSROOM,
      },
    ]
  }, [t])

  return (
    <AboutHeaderTabsWrapper>
      <UHStack
        px={2}
        py={1.5}
        gap={2.5}
        overflow="auto"
        width="100%"
        justifyContent={{
          xs: 'flex-start',
          sm: 'center',
        }}
        sx={{
          borderBottom: {
            xs: `1px solid ${theme.color.neutral[500]}`,
            lg: '1px solid #0000001A',
          },
        }}
      >
        {tabs.map((tab) => (
          <Link key={tab.path} href={tab.path}>
            <UButton
              variant="text"
              rounded
              sx={{
                color:
                  currentPathname === tab.path
                    ? theme.color.common.white
                    : theme.color.common.black,
                backgroundColor:
                  currentPathname === tab.path
                    ? theme.color.common.black
                    : 'transparent',
                px: {
                  xs: 1,
                  lg: 1.5,
                },
                py: {
                  xs: 0.5,
                  lg: 1,
                },
              }}
            >
              {tab.label}
            </UButton>
          </Link>
        ))}
      </UHStack>
    </AboutHeaderTabsWrapper>
  )
}

export default function AboutHeaderSection({
  currentPathname,
}: AboutHeaderSectionProps) {
  const { t } = useTranslationClient('about')

  return (
    <Stack
      gap={{
        xs: 1,
        sm: 2,
        lg: 3.25,
      }}
      width="100%"
      alignItems={{
        xs: 'flex-start',
        sm: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            lg: '2.375rem',
          },
          fontWeight: 600,
        }}
      >
        {t('title', { ns: 'about' })}
      </Typography>
      <AboutHeaderTabs currentPathname={currentPathname} />
    </Stack>
  )
}
