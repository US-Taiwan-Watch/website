import { Input, InputProps } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { forwardRef, memo } from 'react'

const StyledInput = styled(Input)(({ theme }) => ({
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
}))

const UFilterInput = forwardRef<HTMLDivElement, InputProps>(
  function UFilterInput(props: InputProps, ref) {
    return <StyledInput ref={ref} {...props} />
  }
)

export default memo(UFilterInput)
