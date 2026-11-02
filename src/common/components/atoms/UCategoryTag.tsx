'use client'

import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'
import { styled } from '@/common/lib/mui/theme'
import { Stack, StackProps, TypographyProps } from '@mui/material'
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
        <UWidthLimitedText variant="buttonXS" {...textProps}>
          {value}
        </UWidthLimitedText>
      )}
    </StyledTagContainer>
  )
}
