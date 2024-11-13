import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { styled } from '@/common/lib/mui/theme'
import { forwardRef, memo } from 'react'

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '9px',
  border: `1px solid ${theme.color.grey[1400]}`,
  backgroundColor: theme.color.grey[2600],
  padding: `${theme.spacing(0.25, 1.75)} !important`,
  '& .MuiInputBase-input': {
    padding: 0,
    fontSize: 14,
    fontWeight: 500,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}))

const UFilterTextField = forwardRef<HTMLDivElement, TextFieldProps>(
  function UFilterTextField(props: TextFieldProps, ref) {
    return <StyledTextField ref={ref} {...props} />
  }
)

export default memo(UFilterTextField)
