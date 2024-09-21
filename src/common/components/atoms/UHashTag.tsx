'use client'

import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  StackProps,
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material'

const StyledHashTag = styled(Typography)(({ theme }) => ({
  color: theme.color.neutral[500],
}))

const StyledTagText = styled(Typography)(({ theme }) => ({
  color: theme.color.common.black,
}))

type UHashTagProps = {
  value: string
  containerProps?: StackProps
  textProps?: TypographyProps
  hashTagProps?: TypographyProps
  onClick?: () => void
}

export default function UHashTag({
  value,
  containerProps,
  textProps,
  hashTagProps,
  onClick,
}: UHashTagProps) {
  const theme = useTheme<USTWTheme>()

  const { sx: containerSx, ...restContainerProps } = containerProps ?? {}

  return (
    <UCategoryTag
      onClick={onClick}
      containerProps={{
        borderRadius: '5px',
        border: `1px solid ${theme.color.grey[1400]}`,
        direction: 'row',
        spacing: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        sx: {
          px: '9px',
          py: '6px',
          backgroundColor: theme.color.grey[100],
          cursor: onClick ? 'pointer' : 'default',
          ...containerSx,
        },
        ...restContainerProps,
      }}
      renderValue={
        <>
          <StyledHashTag variant="buttonXXS" {...hashTagProps}>
            #
          </StyledHashTag>
          <StyledTagText variant="buttonXXS" {...textProps}>
            {value}
          </StyledTagText>
        </>
      }
    />
  )
}
