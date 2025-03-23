'use client'

import Autocomplete, {
  type AutocompleteProps,
} from '@mui/material/Autocomplete'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { forwardRef } from 'react'
import UFilterTextField from '@/common/components/atoms/UFilterTextField'
import { useTheme } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

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
  [theme.breakpoints.down('sm')]: {
    '& .MuiInputLabel-root': {
      color: theme.color.common.black,
      fontWeight: 700,
    },
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiInputLabel-root': {
      fontWeight: 500,
    },
  },
}))

type UAutocompleteProps = Omit<
  AutocompleteProps<AutocompleteValue, boolean, boolean, undefined>,
  'renderInput'
> & {
  /**
   * TextField 的 label
   */
  label?: string
}

export default forwardRef<HTMLDivElement, UAutocompleteProps>(
  function UAutocomplete({ label, ...props }: UAutocompleteProps, ref) {
    const theme = useTheme<USTWTheme>()

    return (
      <StyledAutocomplete
        className="UAutocomplete"
        ref={ref}
        {...props}
        slotProps={{
          chip: {
            size: 'small',
          },
          popper: {
            sx: {
              minWidth: 'max-content',
            },
            placement: 'bottom-start',
          },
          paper: {
            sx: {
              maxWidth: 'max-content',
            },
          },
          listbox: {
            sx: {
              '& .MuiAutocomplete-option': {
                '&[aria-selected="true"]': {
                  backgroundColor: `${theme.color.grey[2600]} !important`,
                },
                '&:hover': {
                  backgroundColor: theme.color.grey[2600],
                },
              },
            },
          },
          ...props?.slotProps,
        }}
        renderInput={(params) => (
          <UFilterTextField
            {...params}
            label={label}
            size="small"
            sx={{
              padding: 0,
            }}
            slotProps={{
              inputLabel: {
                color: 'info',
              },
            }}
            /**
             * TextField 在隱藏多的 Tags 時，避免點擊空白處隱藏的 Tags 出現時，
             * 因為此時 Pointer 已經從 空白處移到 Tags 上，導致 Popper 關閉
             * 因此需要強制 setPointerCapture 避免 Pointer 定位錯誤
             *
             * @see {@link https://github.com/mui/material-ui/issues/37046#issuecomment-1551448279}
             */
            onPointerDown={(event) =>
              /**
               * 因為只要避免 Tags 右側的空白處 (MuiInputBase-input)，
               * 因此不需要 currentTarget，只需要 target
               */
              (event.target as HTMLElement).setPointerCapture(event.pointerId)
            }
          />
        )}
        popupIcon={<KeyboardArrowDownIcon />}
      />
    )
  }
)
