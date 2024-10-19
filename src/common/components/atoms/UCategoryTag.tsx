'use client'

import { styled } from '@/common/lib/mui/theme'
import { Stack, StackProps, Typography, TypographyProps } from '@mui/material'
import { ReactNode } from 'react'

const StyledTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  borderRadius: '5px',
  backgroundColor: theme.color.indigo[50],
}))

export type UCategoryTagProps = {
  value?: string
  renderValue?: ReactNode
  containerProps?: StackProps
  textProps?: TypographyProps
  onClick?: StackProps['onClick']
}

export default function UCategoryTag({
  value,
  renderValue,
  containerProps,
  textProps,
  onClick,
}: UCategoryTagProps) {
  const { sx: containerSx, ...restContainerProps } = containerProps ?? {}
  const { sx: textSx, ...restTextProps } = textProps ?? {}

  return (
    <StyledTagContainer
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        ...containerSx,
      }}
      className="category-tag"
      {...restContainerProps}
    >
      {renderValue ?? (
        <Typography
          variant="buttonXS"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...textSx,
          }}
          {...restTextProps}
        >
          {value}
        </Typography>
      )}
    </StyledTagContainer>
  )
}
