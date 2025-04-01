import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { styled } from '@/common/lib/mui/theme'
import { forwardRef, memo, useEffect, useState } from 'react'

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
  [theme.breakpoints.between('sm', 'md')]: {
    minHeight: '40px',
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 9px) scale(1)',
      fontWeight: 500,
      color: theme.color.common.black,
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -10px) scale(0.75)',
    },
  },
  [theme.breakpoints.up('md')]: {
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
    const [inputWidth, setInputWidth] = useState(20)

    useEffect(() => {
      const updateWidth = () => {
        if (!props.inputProps?.ref.current) return

        // 創建一個臨時 span 來測量文字寬度
        const span = document.createElement('span')
        span.style.visibility = 'hidden'
        span.style.position = 'absolute'
        span.style.whiteSpace = 'pre'
        span.style.font = window.getComputedStyle(
          props.inputProps.ref.current
        ).font
        span.textContent =
          props.inputProps?.value ||
          props.label ||
          props.inputProps?.placeholder ||
          ''

        document.body.appendChild(span)
        const width = span.getBoundingClientRect().width
        document.body.removeChild(span)

        // 設置輸入框寬度（加上一些 padding）
        setInputWidth(width)
      }

      updateWidth()
    }, [props.inputProps, props.label])

    return (
      <StyledTextField
        ref={ref}
        {...props}
        sx={{
          ...props.sx,
          '& .MuiInputBase-input': {
            minWidth: `${inputWidth}px !important`,
          },
        }}
      />
    )
  }
)

export default memo(UFilterTextField)
