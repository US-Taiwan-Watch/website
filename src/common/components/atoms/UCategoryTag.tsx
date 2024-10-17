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
  onClick?: () => void
}

export default function UCategoryTag({
  value,
  renderValue,
  containerProps,
  textProps,
  onClick,
}: UCategoryTagProps) {
  const { sx: containerSx, ...restContainerProps } = containerProps ?? {}

  return (
    <StyledTagContainer
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        ...containerSx,
      }}
      {...restContainerProps}
    >
      {renderValue ?? (
        <Typography variant="buttonXS" {...textProps}>
          {value}
        </Typography>
      )}
    </StyledTagContainer>
  )
}
