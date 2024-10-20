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
      <UContentCard>
        <Stack
          alignItems="center"
          justifyContent="center"
          height="100%"
          position="relative"
        >
          <Typography
            variant="bodyS"
            sx={{ color: theme.color.neutral[500] }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {title.toLowerCase()}
          </Typography>
          <Typography variant="h3" fontWeight={600}>
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
        >
          {children}
        </UContentCard>
      </UContentCardDialog>
    </>
  )
}

export default NumberCard
