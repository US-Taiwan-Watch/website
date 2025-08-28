import {
  Dialog,
  DialogContent,
  DialogProps,
  Stack,
  Typography,
} from '@mui/material'
import { AlertIcon } from '@/common/styles/assets/Icons'
import UHStack from '@/common/components/atoms/UHStack'
import UButton from '@/common/components/atoms/UButton'

interface UAlertDialogProps extends DialogProps {
  title: string
  description: string
  onConfirm?: () => void
}

const UAlertDialog = ({
  title,
  description,
  onConfirm,
  ...props
}: UAlertDialogProps) => {
  return (
    <Dialog
      {...props}
      PaperProps={{
        sx: {
          borderRadius: 4,
          minWidth: {
            xs: '280px', // Mobile: 280px
            sm: '400px', // Tablet: 400px
            md: '480px', // Desktop: 480px
            lg: '520px', // Large desktop: 520px
          },
          maxWidth: {
            xs: '90vw', // Mobile: 90% of viewport width
            sm: '500px', // Tablet: 500px max
            md: '600px', // Desktop: 600px max
            lg: '650px', // Large desktop: 650px max
          },
        },
      }}
    >
      <DialogContent
        sx={{
          py: 3.75,
          px: 3.125,
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            gap: 4,
          }}
        >
          <Stack
            alignItems="center"
            sx={{
              gap: 2.75,
            }}
          >
            <AlertIcon
              sx={{
                width: 56,
                height: 56,
              }}
            />
            <Stack
              alignItems="center"
              sx={{
                gap: 2.5,
              }}
            >
              <Typography variant="h6">{title}</Typography>
              <Typography variant="bodyS" color="grey.4800">
                {description}
              </Typography>
            </Stack>
          </Stack>
          <UHStack
            gap={2}
            sx={{
              width: '100%',
            }}
          >
            <UButton
              variant="contained"
              color="info"
              rounded
              fullWidth
              sx={{
                px: 2,
                py: 1,
                h: 5,
                backgroundColor: 'grey.4900',
                '&:hover': {
                  backgroundColor: 'common.black',
                },
              }}
              onClick={onConfirm}
            >
              <Typography variant="bodyS" fontWeight={500}>
                Yes
              </Typography>
            </UButton>
            <UButton
              variant="contained"
              color="info"
              rounded
              fullWidth
              sx={{
                px: 2,
                py: 1,
                h: 5,
                backgroundColor: 'common.black',
                '&:hover': {
                  backgroundColor: 'grey.4900',
                },
              }}
              onClick={(e) => {
                props.onClose?.(e, 'escapeKeyDown')
              }}
            >
              <Typography variant="bodyS" fontWeight={500}>
                No
              </Typography>
            </UButton>
          </UHStack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default UAlertDialog
