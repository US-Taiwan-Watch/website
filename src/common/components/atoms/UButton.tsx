'use client'

import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ComponentType } from 'react'

interface UButtonProps extends ButtonProps {
  rounded?: boolean
}

const StyledButton = styled(Button)<UButtonProps>(
  ({ theme, color, disabled, size }) => ({
    textTransform: 'none', // 消除文字大寫
    ...(color === 'primary' &&
      disabled && {
        backgroundColor: `${theme.palette.primary.main} !important`,
      }),
    ...(size === 'large' && {
      padding: `${theme.spacing(1.75)} ${theme.spacing(3)}`,
      fontSize: theme.typography.buttonM.fontSize,
      fontWeight: theme.typography.buttonM.fontWeight,
    }),
    ...(size === 'medium' && {
      padding: `${theme.spacing(1.375)} ${theme.spacing(3)}`,
      fontSize: theme.typography.buttonS.fontSize,
      fontWeight: theme.typography.buttonS.fontWeight,
    }),
    ...(size === 'small' && {
      padding: `${theme.spacing(1.5)} ${theme.spacing(1)}`,
      fontSize: theme.typography.buttonXXS.fontSize,
      fontWeight: theme.typography.buttonXXS.fontWeight,
    }),
  })
) as ComponentType<UButtonProps>

const UButton = ({ children, rounded, ...props }: UButtonProps) => {
  return (
    <StyledButton
      {...props}
      sx={{
        ...props.sx,
        ...(rounded && {
          borderRadius: '50px',
        }),
      }}
    >
      {children}
    </StyledButton>
  )
}

export default UButton
