'use client'

import UButton from '@/common/components/atoms/UButton'
import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { CardContent, Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useState } from 'react'
import UIconButton from '@/common/components/atoms/UIconButton'
import CloseIcon from '@mui/icons-material/Close'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'

type BioByAIProps = {
  isModal?: boolean
  onActionClick?: () => void
}

export default function BioByAI({ isModal, onActionClick }: BioByAIProps) {
  const theme = useTheme<USTWTheme>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleActionClick = () => {
    if (isModal) {
      onActionClick?.()
    } else {
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => setIsModalOpen(false)

  const renderAction = () => {
    if (isModal) {
      return (
        <UIconButton
          variant="rounded"
          color="inherit"
          size="small"
          onClick={handleActionClick}
        >
          <CloseIcon sx={{ color: theme.color.neutral[500] }} />
        </UIconButton>
      )
    }

    return (
      <UButton
        endIcon={<ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />}
        color="info"
        variant="outlined"
        size="small"
        sx={{
          py: 0.5,
          px: 1,
          borderRadius: '9px',
          border: `1.5px solid ${theme.color.grey[1400]}`,
        }}
        onClick={handleActionClick}
      >
        <Typography variant="buttonXS">Full Text</Typography>
      </UButton>
    )
  }

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Summary From AI',
        icon: <StarsIcon />,
        iconColor: 'primary',
        action: renderAction(),
      }}
      sx={{
        ...(isModal && {
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }),
      }}
    >
      <CardContent>
        <Typography variant="body" pt={2}>
          Senator Pete Ricketts, a Republican, is the junior senator from
          Nebraska, appointed on January 23, 2023. He is up for reelection in
          2024. Ricketts strongly advocates for Taiwan’s security. He
          co-sponsored the BOLSTER Act to facilitate U.S.-made defense equipment
          transfers from European NATO countries to Taiwan and promote
          coordinated sanctions against China. He supports strengthening
          economic and political ties between Taiwan, the U.S., and Europe,
          focusing on Taiwan’s integration into international organizations and
          economic resilience, especially in semiconductors. Ricketts also
          emphasizes humanitarian aid for Taiwan and counters Chinese propaganda
          to support Taiwan’s democracy.
        </Typography>
      </CardContent>

      {isModalOpen && (
        <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
          <BioByAI isModal onActionClick={handleCloseModal} />
        </UContentCardDialog>
      )}
    </UContentCard>
  )
}
