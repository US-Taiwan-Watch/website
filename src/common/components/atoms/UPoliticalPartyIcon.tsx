'use client'

import { Party } from '@/common/enums/Party'
import { styled, type USTWTheme } from '@/common/lib/mui/theme'
import {
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
} from '@mui/material'
import type { ComponentType } from 'react'

interface UPoliticalPartyIconProps extends Omit<IconButtonProps, 'color'> {
  party: Party
  customFontStyle?: TypographyProps['sx']
}

export const getMainColor = (
  theme: USTWTheme,
  party: UPoliticalPartyIconProps['party']
) => {
  switch (party) {
    case Party.DEMOCRATIC:
      return theme.color.indigo[600]
    case Party.REPUBLICAN:
      return theme.color.red[500]
    case Party.INDEPENDENT:
      return theme.color.grey[500]
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
  ({ theme, party, size }) => ({
    cursor: 'default',
    backgroundColor: getMainColor(theme, party),
    color: theme.color.common.white,
    '.party-icon': {
      ...getIconSize(size),
    },
  })
) as ComponentType<UPoliticalPartyIconProps>

const UPoliticalPartyIcon = (props: UPoliticalPartyIconProps) => {
  const { customFontStyle, ...restProps } = props

  return (
    <StyledPoliticalPartyIcon disableRipple {...restProps}>
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
