'use client'

import Autocomplete, {
  type AutocompleteProps,
} from '@mui/material/Autocomplete'
import type { TextFieldProps } from '@mui/material/TextField'
import { styled } from '@/common/lib/mui/theme'
import { forwardRef } from 'react'
import UFilterTextField from '@/common/components/atoms/UFilterTextField'

type AutocompleteValue = {
  label: string
  value: string | number
}

const StyledAutocomplete = styled(
  Autocomplete<AutocompleteValue, boolean, boolean, undefined>
)(({ theme }) => ({
  '& .MuiTextField-root': {
    height: '100%',
  },
  '& .MuiAutocomplete-option[aria-selected="true"]': {
    backgroundColor: theme.color.grey[2600],
  },
}))

type UAutocompleteProps = Omit<
  AutocompleteProps<AutocompleteValue, boolean, boolean, undefined>,
  'renderInput'
> & {
  textFieldProps?: TextFieldProps
}

export default forwardRef<HTMLDivElement, UAutocompleteProps>(
  function UAutocomplete(
    { textFieldProps, ...props }: UAutocompleteProps,
    ref
  ) {
    return (
      <StyledAutocomplete
        className="UAutocomplete"
        ref={ref}
        {...props}
        renderInput={(params) => (
          <UFilterTextField
            {...params}
            {...textFieldProps}
            /**
             * TextField 在隱藏多的 Tags 時，避免點擊空白處隱藏的 Tags 出現時，
             * 因為此時 Pointer 已經從 空白處移到 Tags 上，導致 Popper 關閉
             * 因此需要強制 setPointerCapture 避免 Pointer 定位錯誤
             *
             * @see {@link https://github.com/mui/material-ui/issues/37046#issuecomment-1551448279}
             */
            onPointerDown={(event) =>
              event.currentTarget.setPointerCapture(event.pointerId)
            }
          />
        )}
      />
    )
  }
)
