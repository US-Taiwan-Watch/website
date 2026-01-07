import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Dialog, useTheme, type DialogProps } from '@mui/material'
import { memo } from 'react'
import type React from 'react'

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiCardContent-root': {
    maxHeight: '80dvh',
    overflow: 'auto',
  },
}))

export interface UContentCardDialogProps extends DialogProps {
  children?: React.ReactNode
}

const UContentCardDialog = function UContentCardDialog({
  children,
  ...props
}: UContentCardDialogProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledDialog
      {...props}
      PaperProps={{
        sx: {
          width: '100%',
          borderRadius: theme.shape.borderRadius,
          bgcolor: 'background.paper',
          boxShadow: 'none',
        },
      }}
    >
      {children}
    </StyledDialog>
  )
}

export default memo(UContentCardDialog)
