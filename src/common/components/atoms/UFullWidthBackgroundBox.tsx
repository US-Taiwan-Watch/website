'use client'

import type React from 'react'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import { get } from 'lodash-es'

interface UFullWidthBackgroundBoxProps {
  className?: string
  children: React.ReactNode
  /** 使用 USTWTheme 的顏色 */
  backgroundColor?: string
}

const UFullWidthBackgroundBox = ({ className, children, backgroundColor }: UFullWidthBackgroundBoxProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width: '100dvw',
        left: '50%',
        right: '50%',
        marginLeft: '-50dvw',
        marginRight: '-50dvw',
        backgroundColor: !backgroundColor ? get(theme.color, 'common.black') : backgroundColor.startsWith('#') ? backgroundColor : get(theme.color, backgroundColor),
        boxSizing: 'border-box',
      }}
    >
      {children}
    </Box>
  )
}

export default UFullWidthBackgroundBox
