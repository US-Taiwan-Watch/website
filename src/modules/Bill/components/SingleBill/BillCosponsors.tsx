'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import CosponsorChart from '@/modules/Bill/components/SingleBill/CosponsorChart'
import CosponsorFilterContent from '@/modules/Bill/components/SingleBill/CosponsorFilterContent'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'

type Props = {
  bill: Bill
}

export default function BillCosponsors({ bill }: Props) {
  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          title: 'Cosponsors',
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
        }}
        headerActionIcon={<CardExpandIcon />}
        contentProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
        headerIconAction="modal"
        modalContent={<CosponsorFilterContent bill={bill} />}
        modalMaxWidth="lg"
      >
        <CosponsorChart data={BillUtils.getCosponsorsParliamentData(bill)} />
      </UContentCard>
    </>
  )
}
