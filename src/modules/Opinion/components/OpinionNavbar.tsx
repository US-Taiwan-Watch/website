'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { useMemo } from 'react'

interface OpinionNavbarProps {
  activeId?: string
}

const OpinionNavbar = ({ activeId }: OpinionNavbarProps) => {
  const theme = useTheme<USTWTheme>()

  const navItems = useMemo(
    () => [
      {
        id: 'military',
        label: '軍事國防',
        href: '/opinion/search/military',
      },
      {
        id: 'foreign',
        label: '外交貿易',
        href: '/opinion/search/foreign',
      },
      {
        id: 'cross-strait',
        label: '兩岸議題',
        href: '/opinion/search/cross-strait',
      },
      {
        id: 'election',
        label: '行政選舉',
        href: '/opinion/search/election',
      },
      {
        id: 'us-law',
        label: '美國法案',
        href: '/opinion/search/us-law',
      },
    ],
    []
  )

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={2}
      sx={{
        borderBottom: `1.5px solid ${theme.color.neutral[400]}`,
      }}
    >
      <UHStack
        spacing={6}
        sx={{
          color: theme.color.grey[2000],
        }}
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <Typography
              variant="menu"
              sx={{
                color:
                  activeId === item.id ? theme.color.orange[900] : 'inherit',
              }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </UHStack>
    </Box>
  )
}

export default OpinionNavbar
