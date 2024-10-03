'use client'

import { Select, SelectProps, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

const StyledSelect = styled(Select)(({ theme }) => ({
  width: 140,
  borderRadius: '9px',
  border: `1px solid ${theme.color.grey[1400]}`,
  backgroundColor: theme.color.grey[2600],
  padding: theme.spacing(1, 1.75),
  '& .MuiInputBase-input': {
    padding: 0,
    fontSize: 14,
    fontWeight: 500,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSelect-icon': {
    color: theme.color.grey[2700],
  },
}))

type USelectProps = SelectProps & {
  isFirstLevel?: boolean
}

export default function USelect({
  children,
  sx,
  isFirstLevel,
  ...props
}: USelectProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledSelect
      displayEmpty
      IconComponent={KeyboardArrowDownOutlinedIcon}
      {...(isFirstLevel && {
        sx: {
          backgroundColor: theme.color.purple[100],
          borderColor: theme.color.purple[200],
          '& .MuiSelect-icon': {
            color: theme.color.neutral[500],
          },
          ...sx,
        },
      })}
      {...props}
    >
      {children}
    </StyledSelect>
  )
}
