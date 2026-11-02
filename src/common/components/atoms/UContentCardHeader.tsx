'use client'

import { styled } from '@/common/lib/mui/theme'
import { Box, CardHeader, CardHeaderProps } from '@mui/material'
import type React from 'react'
import clsx from 'clsx'

const StyledCardHeader = styled(CardHeader)<{
  variant?: 'default' | 'dialog' | 'drawer'
}>(({ theme, variant = 'default' }) => {
  // Base styles
  const baseStyles = {
    borderBottom: `1px solid ${theme.color.grey[1700]}`,
    '& .MuiCardHeader-action': {
      margin: '0px',
    },
  }

  // Variant-specific padding
  const variantStyles = {
    default: {
      // Default padding for regular cards
      padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)}`,
      // Mobile responsive padding
      [theme.breakpoints.down('md')]: {
        padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1.75)} ${theme.spacing(2)}`,
      },
    },
    dialog: {
      // Dialog header: 上 14px 下 14px 左 24px 右 24px
      padding: `${theme.spacing(1.75)} ${theme.spacing(3)} ${theme.spacing(1.75)} ${theme.spacing(3)}`,
    },
    drawer: {
      // Drawer header: 上 16px 下 14px 左 20px 右 20px
      padding: `${theme.spacing(2)} ${theme.spacing(2.5)} ${theme.spacing(1.75)} ${theme.spacing(2.5)}`,
    },
  }

  return {
    ...baseStyles,
    ...variantStyles[variant],
  }
})

const StyledCardHeaderIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  '&.primary': {
    backgroundColor: theme.color.purple[100],
    color: theme.color.common.black,
  },
  '&.secondary': {
    backgroundColor: theme.color.indigo[50],
    color: theme.color.common.black,
  },
  '& svg': {
    width: '20px',
    height: '20px',
  },
}))

type UContentCardHeaderIconColor = 'primary' | 'secondary'

export interface UContentCardHeaderProps extends CardHeaderProps {
  icon?: React.ReactNode
  iconColor?: UContentCardHeaderIconColor
  variant?: 'default' | 'dialog' | 'drawer'
}

const UContentCardHeader = function UContentCardHeader({
  icon,
  iconColor,
  variant = 'default',
  ...props
}: UContentCardHeaderProps) {
  return (
    <StyledCardHeader
      variant={variant}
      {...props}
      {...(icon && {
        avatar: (
          <StyledCardHeaderIcon className={clsx('avatarIcon', iconColor)}>
            {icon}
          </StyledCardHeaderIcon>
        ),
      })}
      titleTypographyProps={{
        variant: 'subtitleM',
        fontWeight: 700,
        textTransform: 'capitalize',
      }}
    />
  )
}

export default UContentCardHeader
