import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Box,
  Card,
  CardProps,
  Drawer,
  useTheme,
  type DrawerProps,
} from '@mui/material'
import { memo } from 'react'

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiCardContent-root': {
    maxHeight: '80dvh',
    overflow: 'auto',
  },
}))

type UContentCardDrawerProps = DrawerProps & {
  cardProps?: {
    sx?: CardProps['sx']
  }
}

const UContentCardDrawer = function UContentCardDrawer(
  props: UContentCardDrawerProps
) {
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
            ...props.cardProps?.sx,
          }}
        >
          {props.children}
        </Card>
      </Box>
    </StyledDrawer>
  )
}

export default memo(UContentCardDrawer)
