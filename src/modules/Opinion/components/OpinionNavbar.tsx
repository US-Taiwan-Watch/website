'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

interface OpinionNavbarProps {
  activeId?: string
}

const OpinionNavbar = ({ activeId }: OpinionNavbarProps) => {
  const theme = useTheme<USTWTheme>()

  const highlightedCategories = useOpinionStore(
    (state) => state.highlightedCategories
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
        {highlightedCategories.map((item) => (
          <Link href={item.link} key={item.id}>
            <Typography
              variant="menu"
              sx={{
                color:
                  activeId === item.id ? theme.color.orange[900] : 'inherit',
              }}
              fontWeight={500}
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
