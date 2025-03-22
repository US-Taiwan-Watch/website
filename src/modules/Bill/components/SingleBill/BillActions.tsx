'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography } from '@mui/material'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import dayjs from 'dayjs'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'
import ActionsContent from '@/modules/Bill/components/SingleBill/ActionsContent'
const DATE_FORMAT = 'MM/DD/YYYY'

type Props = {
  bill: Bill
}

export default function BillActions({ bill }: Props) {
  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          title: 'Actions',
          icon: <ActionsIcon />,
          iconColor: 'primary',
        }}
        headerActionIcon={<CardExpandIcon />}
        headerIconAction="modal"
        modalContent={<ActionsContent bill={bill} />}
        modalMaxWidth="lg"
      >
        <Stack pt={2}>
          <Typography variant="buttonXS" mb={2}>
            {dayjs(BillUtils.getLatestAction(bill)?.date).isValid()
              ? dayjs(BillUtils.getLatestAction(bill)?.date).format(DATE_FORMAT)
              : ''}
          </Typography>
          <UHeightLimitedText maxLine={4} variant="body">
            {BillUtils.getLatestAction(bill)?.description}
          </UHeightLimitedText>
        </Stack>
      </UContentCard>
    </>
  )
}
