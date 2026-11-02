'use client'

import { ExpandIcon } from '@/common/styles/assets/Icons'
import { Box, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'

export default function CardExpandIcon() {
  const theme = useTheme<USTWTheme>()
  return (
    <Box
      sx={{
        borderRadius: '9px',
        border: `1.5px solid ${theme.color.grey[1400]}`,
        px: 1,
        py: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ExpandIcon sx={{ color: theme.color.neutral[500] }} />
    </Box>
  )
}
