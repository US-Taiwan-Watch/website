'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import { useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import CosponsorChart from '@/modules/Bill/components/SingleBill/CosponsorChart'
import CosponsorDialog from '@/modules/Bill/components/SingleBill/CosponsorDialog'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import useModal from '@/common/hooks/useModal'

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
        contentProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <CosponsorChart data={BillUtils.getCosponsorsParliamentData(bill)} />
      </UContentCard>

      <CosponsorDialog
        bill={bill}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
