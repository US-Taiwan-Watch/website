// 提供多數卡片的標題

import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { Box, CardHeader, CardHeaderProps } from '@mui/material'
import type React from 'react'

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(0, 0, 2, 0),
  borderBottom: `1px solid ${theme.color.grey[1700]}`,
  '& .MuiCardHeader-action': {
    margin: '0px',
  },
}))

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

// 另外定義的 Icon 色卡，方便引用的人不需要再定義一次
type UCardHeaderIconColor = 'primary' | 'secondary'

export interface UCardHeaderProps extends CardHeaderProps {
  icon?: React.ReactNode
  iconColor?: UCardHeaderIconColor
}

const UCardHeader = function UCardHeader({
  icon,
  iconColor,
  ...props
}: UCardHeaderProps) {
  return (
    <StyledCardHeader
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

export default UCardHeader
