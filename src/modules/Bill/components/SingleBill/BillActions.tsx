'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import dayjs from 'dayjs'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import ActionsDialog from '@/modules/Bill/components/SingleBill/ActionsDialog'
import useModal from '@/common/hooks/useModal'

const DATE_FORMAT = 'MM/DD/YYYY'

type Props = {
  bill: Bill
}

export default function BillActions({ bill }: Props) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          title: 'Actions',
          icon: <ActionsIcon />,
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
