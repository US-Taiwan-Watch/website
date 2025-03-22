import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Box, Card, Drawer, useTheme, type DrawerProps } from '@mui/material'
import { memo } from 'react'

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiCardContent-root': {
    maxHeight: '80dvh',
    overflow: 'auto',
  },
}))

const UContentCardDrawer = function UContentCardDrawer(props: DrawerProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledDrawer
      {...props}
      anchor="bottom"
      PaperProps={{
        sx: {
          width: '100%',
          borderRadius: theme.shape.borderRadius,
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Card
          sx={{
            padding: 2,
            '& .MuiCardContent-root:last-child': {
              padding: 0,
            },
          }}
        >
          {props.children}
        </Card>
      </Box>
    </StyledDrawer>
  )
}

export default memo(UContentCardDrawer)
