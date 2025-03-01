'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { Typography } from '@mui/material'
import CardExpandButton from '@/modules/Bill/components/SingleBill/CardExpandButton'
import { Bill } from '@/modules/Bill/business/Bill'

type Props = {
  bill: Bill
}

export default function BioByAI({ bill }: Props) {
  return (
    <UContentCard
      withHeader
      headerIconAction="modal"
      modalContent={
        <Typography variant="body" pt={2}>
          {bill.summary}
        </Typography>
      }
      headerProps={{
        title: 'Summary From AI',
        icon: <StarsIcon />,
        iconColor: 'primary',
        action: <CardExpandButton />,
      }}
    >
      <Typography variant="body" pt={2}>
        {bill.summary}
      </Typography>
    </UContentCard>
  )
}
