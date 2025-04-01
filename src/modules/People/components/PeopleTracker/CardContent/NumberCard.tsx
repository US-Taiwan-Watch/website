import UIconButton from '@/common/components/atoms/UIconButton'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import UContentCard from '@/common/components/atoms/UContentCard'
import type React from 'react'
import useModal from '@/common/hooks/useModal'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import CloseIcon from '@mui/icons-material/Close'
import { UCardHeaderProps } from '@/common/components/atoms/UCardHeader'

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.color.grey[400],
}))

interface NumberCardProps {
  children?: React.ReactNode
  title: string
  number: number
  /** header 的 props */
  headerProps?: UCardHeaderProps
}

const NumberCard = function ({
  children,
  title,
  number,
  headerProps,
}: NumberCardProps) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const theme = useTheme<USTWTheme>()

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
          <UIconButton
            variant="rounded"
            size="small"
            color="inherit"
            onClick={handleOpenModal}
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <StyledArrowOutwardIcon />
          </UIconButton>
        </Stack>
      </UContentCard>
      <UContentCardDialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
      >
        <UContentCard
          withHeader={true}
          headerProps={{
            ...headerProps,
            action: (
              <UIconButton
                variant="rounded"
                color="inherit"
                size="small"
                onClick={handleCloseModal}
              >
                <CloseIcon sx={{ color: theme.color.neutral[500] }} />
              </UIconButton>
            ),
          }}
          sx={{
            padding: 0,
            border: 'none',
            borderRadius: 0,
          }}
          contentProps={{
            sx: {
              '& > *:not(:last-child)': {
                borderBottom: `1px solid ${theme.color.neutral[100]}`,
              },
            },
          }}
        >
          {children}
        </UContentCard>
      </UContentCardDialog>
    </>
  )
}

export default NumberCard
