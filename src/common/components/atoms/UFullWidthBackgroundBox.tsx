'use client'

import type React from 'react'
import { Box, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import { get } from 'lodash-es'

interface UFullWidthBackgroundBoxProps {
  children: React.ReactNode
  /** 使用 USTWTheme 的顏色 */
  backgroundColor?: string
}

const UFullWidthBackgroundBox = ({ children, backgroundColor }: UFullWidthBackgroundBoxProps) => {
  const theme = useTheme() as USTWTheme

  console.log(theme.color.common.black)

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100dvw',
        left: '50%',
        right: '50%',
        marginLeft: '-50dvw',
        marginRight: '-50dvw',
        backgroundColor: !backgroundColor ? get(theme.color, 'common.black') : backgroundColor.startsWith('#') ? backgroundColor : get(theme.color, backgroundColor),
      }}
    >
      <Container>
        {children}
      </Container>
    </Box>
  )
}

export default UFullWidthBackgroundBox
