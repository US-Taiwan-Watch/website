'use client'

import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import { TrackerIcon } from '@/common/styles/assets/Icons'
import { Box, Stack, Typography } from '@mui/material'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  bill: Bill
}

export default function BillTracker({ bill }: Props) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.tracker.title', {
          ns: 'bill',
        }),
        icon: <TrackerIcon />,
        iconColor: 'primary',
        actionType: 'tooltip',
      }}
      tooltip={{
        content: t('page.card.tracker.tooltip', {
          ns: 'bill',
        }),
      }}
      sx={{
        '& .MuiCardContent-root': {
          overflowX: 'hidden',
        },
      }}
    >
      <Stack
        pt={{
          xs: 2,
          md: 0,
        }}
      >
        {isMobile && (
          <Typography variant="articleH4">
            {t(
              `status.${bill.statusTracker?.currentStatus ?? BillStatusEnum.INTRODUCED}.label`,
              {
                ns: 'bill',
              }
            )}
          </Typography>
        )}

        <Box
          py={2}
          px={{
            xs: 0,
            sm: 1,
          }}
        >
          <UTimeline
            data={BillUtils.getBillStatusTimelineData(bill).map((data) => ({
              title: t(`status.${data.status}.label`, {
                ns: 'bill',
              }),
              isFuture: data.isFuture,
            }))}
            activeIndex={BillUtils.getCurrentStatusIndex(bill)}
            itemMinHeight={50}
            variant="secondary"
            isHorizontal={isMobile}
          />
        </Box>
      </Stack>
    </UContentCardWithModal>
  )
}
