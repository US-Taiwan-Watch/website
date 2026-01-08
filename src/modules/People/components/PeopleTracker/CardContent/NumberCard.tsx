import UIconButton from '@/common/components/atoms/UIconButton'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader, {
  UContentCardHeaderProps,
} from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import type React from 'react'
import useContentCardModal from '@/common/hooks/useContentCardModal'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import CloseIcon from '@mui/icons-material/Close'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UContentCardDrawer from '@/common/components/atoms/UContentCardDrawer'

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.color.grey[400],
}))

interface NumberCardProps {
  children?: React.ReactNode
  title: string
  number: number
  /** header 的 props */
  headerProps?: UContentCardHeaderProps
}

const NumberCard = function ({
  children,
  title,
  number,
  headerProps,
}: NumberCardProps) {
  const { isMobile } = useResponsive()
  const { isOpen, open, close } = useContentCardModal()
  const theme = useTheme<USTWTheme>()

  const modalComponent = (
    <UContentCard
      sx={{
        padding: 0,
        border: 'none',
        borderRadius: 0,
      }}
    >
      <UContentCardHeader
        variant={isMobile ? 'drawer' : 'dialog'}
        {...headerProps}
        action={
          <UIconButton
            variant="rounded"
            color="inherit"
            size="small"
            onClick={close}
          >
            <CloseIcon sx={{ color: theme.color.neutral[500] }} />
          </UIconButton>
        }
      />
      <UContentCardContent
        variant={isMobile ? 'drawer' : 'dialog'}
        sx={{
          '& > *:not(:last-child)': {
            borderBottom: `1px solid ${theme.color.neutral[100]}`,
          },
          ...(isMobile && { bgcolor: 'neutral.100' }),
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden !important',
        }}
      >
        {children}
      </UContentCardContent>
    </UContentCard>
  )

  return (
    <>
      <UContentCard
        sx={{
          padding: 0,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          sx={{
            height: {
              xs: 100,
              md: 110,
            },
            px: {
              xs: 2,
              lg: 4.75,
            },
            py: {
              xs: 1.5,
              lg: 1.75,
            },
          }}
        >
          <Typography
            textTransform="capitalize"
            sx={{
              color: theme.color.neutral[500],
              fontSize: {
                xs: '0.625rem',
                sm: '0.875rem',
              },
              fontWeight: {
                xs: 600,
                sm: 700,
              },
            }}
          >
            {title.toLowerCase()}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '2.375rem',
                lg: '3rem',
              },
              fontWeight: {
                xs: 600,
                sm: 700,
              },
            }}
          >
            {number}
          </Typography>
          {number > 0 && (
            <UIconButton
              variant="rounded"
              size="small"
              color="inherit"
              onClick={open}
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}
            >
              <StyledArrowOutwardIcon />
            </UIconButton>
          )}
        </Stack>
      </UContentCard>
      {isMobile ? (
        <UContentCardDrawer open={isOpen} onClose={close}>
          {modalComponent}
        </UContentCardDrawer>
      ) : (
        <UContentCardDialog open={isOpen} onClose={close} maxWidth="lg">
          {modalComponent}
        </UContentCardDialog>
      )}
    </>
  )
}

export default NumberCard
