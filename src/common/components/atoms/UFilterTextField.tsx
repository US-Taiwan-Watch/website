import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { styled } from '@/common/lib/mui/theme'
import { forwardRef, memo } from 'react'

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '9px',
  border: `1px solid ${theme.color.grey[1400]}`,
  backgroundColor: theme.color.grey[2600],
  padding: `${theme.spacing(0, 1.75)} !important`,
  minHeight: '50px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-root': {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 12px) scale(1)',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, -10px) scale(0.75)',
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiInputLabel-root': {
      fontWeight: 700,
      color: theme.color.grey[400],
    },
    '& .MuiSvgIcon-root': {
      color: theme.color.neutral[300],
    },
    '& .MuiInputLabel-shrink': {
      color: theme.color.common.black,
    },
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiInputBase-input': {
      minWidth: '100px !important',
    },
    '& .MuiInputLabel-root': {
      fontWeight: 500,
      color: theme.color.common.black,
    },
    '& .MuiSvgIcon-root': {
      color: theme.color.grey[2700],
    },
    '& .MuiInputLabel-shrink': {
      color: theme.color.common.black,
    },
  },
}))

const UFilterTextField = forwardRef<HTMLDivElement, TextFieldProps>(
  function UFilterTextField(props: TextFieldProps, ref) {
    return <StyledTextField ref={ref} {...props} />
  }
)

export default memo(UFilterTextField)
