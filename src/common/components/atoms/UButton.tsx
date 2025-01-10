'use client'

import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ComponentType } from 'react'

interface UButtonProps extends ButtonProps {
  rounded?: boolean
}

const StyledButton = styled(Button)<UButtonProps>(
  ({ theme, color, disabled }) => ({
    textTransform: 'none', // 消除文字大寫
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    ...(color === 'primary' &&
      disabled && {
        backgroundColor: `${theme.palette.primary.main} !important`,
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
