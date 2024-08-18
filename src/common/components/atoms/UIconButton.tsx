'use client'

import type { USTWTheme } from '@/common/lib/mui/theme'
import { IconButton, IconButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { ComponentType } from 'react'

interface UIconButtonProps extends Omit<IconButtonProps, 'color'> {
  variant: 'contained' | 'outlined' | 'rounded';
  color: IconButtonProps['color'] | 'black';
}

const getBackgroundColor = (
  theme: USTWTheme,
  color: UIconButtonProps['color'] = 'primary'
) => {
  switch (color) {
    case 'black':
      return theme.color.grey[1000]
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

const UIconButton = styled(IconButton)<UIconButtonProps>(
  ({ theme, variant, color, size }) => ({
    ...(variant === 'rounded' && {
      backgroundColor: getBackgroundColor(theme as USTWTheme, color),
      color: getContrastTextColor(theme as USTWTheme, color),
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme as USTWTheme, color),
      },
      svg: {
        ...getIconSize(size),
      },
    }),
    ...(variant === 'contained' && {
      backgroundColor: getBackgroundColor(theme as USTWTheme, color),
      color: getContrastTextColor(theme as USTWTheme, color),
      borderRadius: theme.shape.borderRadius, // 使用主題中定義的標準圓角
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme as USTWTheme, color),
      },
      svg: {
        ...getIconSize(size),
      },
    }),
    ...(variant === 'outlined' && {
      backgroundColor: 'transparent',
      color: theme.palette.common.black,
      border: `1px solid ${theme.palette.common.black}`,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      svg: {
        ...getIconSize(size),
      },
    }),
  })
) as ComponentType<UIconButtonProps>

export default UIconButton
