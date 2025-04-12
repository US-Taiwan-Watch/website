'use client'

import { styled, type USTWTheme } from '@/common/lib/mui/theme'
import { IconButton, IconButtonProps } from '@mui/material'
import type { ComponentType } from 'react'

interface UIconButtonProps
  extends Omit<IconButtonProps, 'color' | 'variant' | 'size'> {
  variant: 'contained' | 'outlined' | 'rounded' | 'text'
  color: IconButtonProps['color'] | 'black' | 'white'
  size?: 'xs' | 'small' | 'medium' | 'large'
}

const getBackgroundColor = (
  theme: USTWTheme,
  color: UIconButtonProps['color'] = 'primary'
) => {
  switch (color) {
    case 'black':
      return theme.color.grey[1000]
    case 'white':
      return theme.color.common.white
    case 'primary':
      return theme.color.lime[500]
    case 'inherit':
      return 'inherit'
    case 'default':
      return 'inherit'
    default:
      return theme.palette[color].main
  }
}

const getContrastTextColor = (
  theme: USTWTheme,
  color: UIconButtonProps['color'] = 'primary'
) => {
  switch (color) {
    case 'black':
      return theme.color.common.white
    case 'white':
      return theme.color.common.black
    case 'primary':
      return theme.color.common.black
    case 'inherit':
      return 'inherit'
    case 'default':
      return 'inherit'
    default:
      return theme.palette[color].contrastText
  }
}

const getHoveredBackgroundColor = (
  theme: USTWTheme,
  color: UIconButtonProps['color'] = 'primary'
) => {
  switch (color) {
    case 'black':
      return theme.color.neutral[500]
    case 'white':
      return theme.color.common.white
    case 'inherit':
      return 'inherit'
    case 'default':
      return 'inherit'
    default:
      return theme.palette[color].dark
  }
}

const getIconSize = (size: UIconButtonProps['size']) => {
  switch (size) {
    case 'xs':
      return {
        width: 16,
        height: 16,
      }
    case 'small':
      return {
        width: 20,
        height: 20,
      }
    case 'medium':
      return {
        width: 24,
        height: 24,
      }
    case 'large':
      return {
        width: 28,
        height: 28,
      }
    default:
      return {
        width: 24,
        height: 24,
      }
  }
}

const getButtonSize = (size: UIconButtonProps['size']) => {
  switch (size) {
    case 'xs':
      return {
        width: 32,
        height: 32,
      }
    case 'small':
      return {
        width: 40,
        height: 40,
      }
    case 'medium':
      return {
        width: 48,
        height: 48,
      }
    case 'large':
      return {
        width: 56,
        height: 56,
      }
    default:
      return {
        width: 48,
        height: 48,
      }
  }
}

const UIconButton = styled(IconButton)<UIconButtonProps>(
  ({ theme, variant, color, size }) => ({
    ...(variant === 'rounded' && {
      backgroundColor: getBackgroundColor(theme, color),
      color: getContrastTextColor(theme, color),
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme, color),
      },
      svg: {
        ...getIconSize(size),
      },
      ...getButtonSize(size),
    }),
    ...(variant === 'contained' && {
      backgroundColor: getBackgroundColor(theme, color),
      color: getContrastTextColor(theme, color),
      borderRadius: theme.shape.borderRadius, // 使用主題中定義的標準圓角
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme, color),
      },
      svg: {
        ...getIconSize(size),
      },
      ...getButtonSize(size),
    }),
    ...((variant === 'outlined' || variant === 'text') && {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      ...(variant === 'outlined' && {
        border: `1px solid ${theme.palette.text.primary}`,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }),
      borderRadius: theme.shape.borderRadius,
      svg: {
        ...getIconSize(size),
      },
      ...getButtonSize(size),
    }),
  })
) as ComponentType<UIconButtonProps>

export default UIconButton
