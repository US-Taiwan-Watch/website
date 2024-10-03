'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
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
        <CardContent>
          <Stack pt={2}>
            <UHStack alignItems="center" justifyContent="space-between" mb={2}>
              <UCategoryTag
                value={bill.latestAction?.chamber}
                containerProps={{
                  sx: {
                    backgroundColor: `${theme.color.purple[100]}80`, // 50% opacity
                  },
                }}
                textProps={{
                  variant: 'buttonS',
                }}
              />

              <Typography variant="buttonXS">
                {dayjs(bill.latestAction?.date).isValid()
                  ? dayjs(bill.latestAction?.date).format(DATE_FORMAT)
                  : ''}
              </Typography>
            </UHStack>

            <UHeightLimitedText maxLine={4} variant="body">
              {bill.latestAction?.description}
            </UHeightLimitedText>
          </Stack>
        </CardContent>
      </UContentCard>

      <ActionsDialog
        bill={bill}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
