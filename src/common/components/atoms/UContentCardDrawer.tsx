import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Drawer, useTheme, type DrawerProps } from '@mui/material'
import { memo } from 'react'
import type React from 'react'

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiCardContent-root': {
    maxHeight: '80dvh',
    overflow: 'auto',
  },
}))

export interface UContentCardDrawerProps extends DrawerProps {
  children?: React.ReactNode
}

const UContentCardDrawer = function UContentCardDrawer({
  children,
  ...props
}: UContentCardDrawerProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledDrawer
      {...props}
      anchor="bottom"
      PaperProps={{
        sx: {
          width: '100%',
          borderTopLeftRadius: theme.spacing(theme.shape.borderRadius / 2),
          borderTopRightRadius: theme.spacing(theme.shape.borderRadius / 2),
          bgcolor: 'background.paper',
          boxShadow: 'none',
        },
      }}
    >
      {children}
    </StyledDrawer>
  )
}

export default memo(UContentCardDrawer)
