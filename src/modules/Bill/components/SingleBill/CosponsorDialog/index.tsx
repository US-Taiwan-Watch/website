'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import { Bill } from '@/modules/Bill/classes/Bill'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import { CardContent, Grid2, Typography, useTheme } from '@mui/material'
import CosponsorFilter from '@/modules/Bill/components/SingleBill/CosponsorDialog/CosponsorFilter'

type Props = {
  bill: Bill
  isModalOpen: boolean
  handleCloseModal: () => void
}

export default function CosponsorDialog({
  isModalOpen,
  handleCloseModal,
}: Props) {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="lg"
    >
      <UContentCard
        withHeader
        headerProps={{
          title: 'Cosponsors',
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
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
        <CardContent>
          <Grid2 container mt={2} spacing={2}>
            <Grid2 size={3}>
              <CosponsorFilter />
            </Grid2>
            <Grid2 size={9}>
              <Typography>test</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </UContentCard>
    </UContentCardDialog>
  )
}
