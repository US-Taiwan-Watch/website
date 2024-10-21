import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Box, Card, Dialog, useTheme, type DialogProps } from '@mui/material'

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiCardContent-root': {
    maxHeight: '80dvh',
    overflow: 'auto',
  },
}))

const UContentCardDialog = function UContentCardDialog(props: DialogProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledDialog
      {...props}
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
    </StyledDialog>
  )
}

export default UContentCardDialog
