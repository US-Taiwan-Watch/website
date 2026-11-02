'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { USTWTheme } from '@/common/lib/mui/theme'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import type React from 'react'
import UContainer from '@/common/components/atoms/UContainer'

export type AboutHeaderTab = {
  label: string
  path: string
}

type AboutHeaderSectionProps = {
  title: string
  currentPathname: string
  tabs: AboutHeaderTab[]
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

const AboutHeaderTabs = ({
  currentPathname,
  tabs,
}: Omit<AboutHeaderSectionProps, 'title'>) => {
  const theme = useTheme<USTWTheme>()

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
            xs: `1px solid ${theme.color.about.header.borderMobile}`,
            lg: `1px solid ${theme.color.about.header.borderDesktop}`,
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
                    ? theme.color.about.header.tabActiveText
                    : theme.color.about.header.tabText,
                backgroundColor:
                  currentPathname === tab.path
                    ? theme.color.about.header.tabActiveBackground
                    : 'transparent',
                px: {
                  xs: 1,
                  lg: 1.5,
                },
                py: {
                  xs: 0.5,
                  lg: 1,
                },
                width: 'max-content',
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
  title,
  currentPathname,
  tabs,
}: AboutHeaderSectionProps) {
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
        {title}
      </Typography>
      <AboutHeaderTabs currentPathname={currentPathname} tabs={tabs} />
    </Stack>
  )
}
