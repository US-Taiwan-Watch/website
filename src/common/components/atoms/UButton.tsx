'use client'

import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ComponentType } from 'react'

interface UButtonProps extends ButtonProps {
  rounded?: boolean
}

const UButton = styled(Button)<UButtonProps>(
  ({ theme, rounded, color, disabled }) => ({
    ...(rounded && {
      borderRadius: '50px',
    }),
    textTransform: 'none', // 消除文字大寫
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    ...(color === 'primary' &&
      disabled && {
        backgroundColor: `${theme.palette.primary.main} !important`,
      }),
  })
) as ComponentType<UButtonProps>

export default UButton
