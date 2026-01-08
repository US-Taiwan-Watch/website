'use client'

import { styled } from '@/common/lib/mui/theme'
import { CardContent, CardContentProps } from '@mui/material'
import type React from 'react'

const StyledCardContent = styled(CardContent)<{
  variant?: 'default' | 'dialog' | 'drawer'
}>(({ theme, variant = 'default' }) => {
  // Base styles
  const baseStyles = {
    overflow: 'auto',
  }

  // Variant-specific padding
  const variantStyles = {
    default: {
      // Default padding for regular cards: 上 16px 下 16px 左 24px 右 24px
      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      // Mobile responsive padding: 上 14px 下 14px 左 16px 右 16px
      [theme.breakpoints.down('md')]: {
        padding: `${theme.spacing(1.75)} ${theme.spacing(2)}`,
      },
      '&:last-child': {
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
          paddingBottom: theme.spacing(1.75),
        },
      },
    },
    dialog: {
      // Dialog content: 上 15px 下 14px 左 24px 右 24px
      padding: `${theme.spacing(1.875)} ${theme.spacing(3)}`,
      '&:last-child': {
        paddingBottom: theme.spacing(1.75),
      },
    },
    drawer: {
      // Drawer content: 上 15px 下 16px 左 24px 右 24px
      padding: `${theme.spacing(1.875)} ${theme.spacing(3)}`,
      '&:last-child': {
        paddingBottom: theme.spacing(2),
      },
    },
  }

  return {
    ...baseStyles,
    ...variantStyles[variant],
  }
})

export interface UContentCardContentProps extends CardContentProps {
  children?: React.ReactNode
  variant?: 'default' | 'dialog' | 'drawer'
}

const UContentCardContent = function UContentCardContent({
  children,
  variant = 'default',
  sx,
  ...props
}: UContentCardContentProps) {
  return (
    <StyledCardContent variant={variant} {...props} sx={sx}>
      {children}
    </StyledCardContent>
  )
}

export default UContentCardContent
