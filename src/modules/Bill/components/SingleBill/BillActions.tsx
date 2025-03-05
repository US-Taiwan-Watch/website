'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography } from '@mui/material'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import dayjs from 'dayjs'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import ActionsDialog from '@/modules/Bill/components/SingleBill/ActionsDialog'
import useModal from '@/common/hooks/useModal'
import CardExpandButton from '@/modules/Bill/components/SingleBill/CardExpandButton'

const DATE_FORMAT = 'MM/DD/YYYY'

type Props = {
  bill: Bill
}

export default function BillActions({ bill }: Props) {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          title: 'Actions',
          icon: <ActionsIcon />,
          iconColor: 'primary',
          action: <CardExpandButton onClick={handleOpenModal} />,
        }}
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

      <ActionsDialog
        bill={bill}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
