'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import CosponsorChart from '@/modules/Bill/components/SingleBill/CosponsorChart'
import CosponsorDialog from '@/modules/Bill/components/SingleBill/CosponsorDialog'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import useModal from '@/common/hooks/useModal'
import CardExpandButton from '@/modules/Bill/components/SingleBill/CardExpandButton'

type Props = {
  bill: Bill
}

export default function BillCosponsors({ bill }: Props) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          title: 'Cosponsors',
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
          action: <CardExpandButton onClick={handleOpenModal} />,
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
