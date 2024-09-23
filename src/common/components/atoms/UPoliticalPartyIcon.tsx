'use client'

import { styled, type USTWTheme } from '@/common/lib/mui/theme'
import {
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import type { ComponentType } from 'react'

interface UPoliticalPartyIconProps extends Omit<IconButtonProps, 'color'> {
  variant: 'contained' | 'outlined' | 'rounded'
  party: 'democracy' | 'republic' | 'other'
  customFontStyle?: TypographyProps['sx']
}

const getMainColor = (
  theme: USTWTheme,
  party: UPoliticalPartyIconProps['party']
) => {
  switch (party) {
    case 'democracy':
      return theme.color.indigo[600]
    case 'republic':
      return theme.color.red[500]
    case 'other':
      return theme.color.grey[500]
  }
}

const getHoveredBackgroundColor = (
  theme: USTWTheme,
  party: UPoliticalPartyIconProps['party']
) => {
  switch (party) {
    case 'democracy':
      return theme.color.indigo[600] + 'CC' // 80% opacity
    case 'republic':
      return theme.color.red[500] + 'CC' // 80% opacity
    case 'other':
      return theme.color.grey[500] + 'CC' // 80% opacity
  }
}

const getIconSize = (size: UPoliticalPartyIconProps['size']) => {
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

const getTypographyProps = (
  size: UPoliticalPartyIconProps['size']
): TypographyProps => {
  switch (size) {
    case 'small':
      return {
        fontSize: 20,
        lineHeight: 0,
        fontWeight: 600,
      }
    case 'medium':
      return {
        fontSize: 24,
        lineHeight: 0,
        fontWeight: 600,
      }
    case 'large':
      return {
        fontSize: 28,
        lineHeight: 0,
        fontWeight: 600,
      }
    default:
      return {
        fontSize: 24,
        lineHeight: 0,
        fontWeight: 600,
      }
  }
}

const StyledPoliticalPartyIcon = styled(IconButton)<UPoliticalPartyIconProps>(
  ({ theme, variant, party, size }) => ({
    ...(variant === 'rounded' && {
      backgroundColor: getMainColor(theme, party),
      color: theme.color.common.white,
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme, party),
      },
      '.party-icon': {
        ...getIconSize(size),
      },
    }),
    ...(variant === 'contained' && {
      backgroundColor: getMainColor(theme, party),
      color: theme.color.common.white,
      borderRadius: theme.shape.borderRadius, // 使用主題中定義的標準圓角
      '&:hover': {
        backgroundColor: getHoveredBackgroundColor(theme, party),
      },
      '.party-icon': {
        ...getIconSize(size),
      },
    }),
    ...(variant === 'outlined' && {
      backgroundColor: 'transparent',
      color: theme.palette.common.white,
      border: `1px solid ${getMainColor(theme, party)}`,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '.party-icon': {
        ...getIconSize(size),
      },
    }),
  })
) as ComponentType<UPoliticalPartyIconProps>

const UPoliticalPartyIcon = (props: UPoliticalPartyIconProps) => {
  const { customFontStyle, ...restProps } = props

  return (
    <StyledPoliticalPartyIcon {...restProps}>
      <div
        className="party-icon"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: getIconSize(props.size).width,
          height: getIconSize(props.size).height,
        }}
      >
        <Typography {...getTypographyProps(props.size)} sx={customFontStyle}>
          {props.party.slice(0, 1).toUpperCase()}
        </Typography>
      </div>
    </StyledPoliticalPartyIcon>
  )
}

export default UPoliticalPartyIcon
