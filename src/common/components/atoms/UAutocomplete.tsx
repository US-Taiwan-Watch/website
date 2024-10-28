'use client'

import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  TextFieldProps,
  useTheme,
} from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { forwardRef } from 'react'

type AutocompleteValue = {
  label: string
  value: string | number
}

const StyledAutocomplete = styled(
  Autocomplete<AutocompleteValue, boolean, boolean, undefined>
)(({ theme }) => ({
  padding: 0,
  minWidth: 140,
  borderRadius: '9px',
  border: `1px solid ${theme.color.grey[1400]}`,
  backgroundColor: theme.color.grey[2600],
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

type UAutocompleteProps = Omit<
  AutocompleteProps<AutocompleteValue, boolean, boolean, undefined>,
  'renderInput'
> & {
  isFirstLevel?: boolean
  textFieldProps?: TextFieldProps
}

export default forwardRef<HTMLDivElement, UAutocompleteProps>(
  function UAutocomplete(
    { sx, isFirstLevel, textFieldProps, ...props }: UAutocompleteProps,
    ref
  ) {
    const theme = useTheme<USTWTheme>()

    return (
      <StyledAutocomplete
        ref={ref}
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
        renderInput={(params) => <TextField {...params} {...textFieldProps} />}
      />
    )
  }
)
