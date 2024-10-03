'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import { CardContent, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import CosponsorChart from '@/modules/Bill/components/SingleBill/CosponsorChart'
import { PARLIAMENT_CHART_DATA_MOCK_1 } from '@/modules/Bill/data'
import CosponsorDialog from '@/modules/Bill/components/SingleBill/CosponsorDialog'
import { Bill } from '@/modules/Bill/classes/Bill'
import useModal from '@/common/hooks/useModal'

const data = PARLIAMENT_CHART_DATA_MOCK_1

type Props = {
  bill: Bill
}

export default function BillCosponsors({ bill }: Props) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
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
              onClick={handleOpenModal}
            >
              <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
            </UIconButton>
          ),
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CosponsorChart data={data} />
        </CardContent>
      </UContentCard>

      <CosponsorDialog
        bill={bill}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
