'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { TrackerIcon } from '@/common/styles/assets/Icons'
import { Box, Stack, Typography } from '@mui/material'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'

type Props = {
  bill: Bill
}

export default function BillTracker({ bill }: Props) {
  const { isMobile } = useResponsive()

  return (
    <UContentCard
      withHeader
      headerProps={{
        headerIconAction: 'tooltip',
        title: 'Tracker',
        icon: <TrackerIcon />,
        iconColor: 'primary',
      }}
      tooltipProps={{
        content: 'Tracker',
      }}
      contentProps={{
        sx: {
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
            {BillUtils.getBillStatusText(
              bill.statusTracker?.currentStatus ?? BillStatusEnum.INTRODUCED
            )}
          </Typography>
        )}

        <Box
          mx={{
            xs: -2,
            md: 0,
          }}
          px={{
            xs: 0,
            md: 2,
          }}
          py={2}
        >
          <UTimeline
            data={BillUtils.getAllBillStatuses(bill).map((status) => ({
              title: BillUtils.getBillStatusText(status),
            }))}
            activeIndex={BillUtils.getStatusIndex(bill)}
            itemMinHeight={50}
            variant="secondary"
            isHorizontal={isMobile}
          />
        </Box>
      </Stack>
    </UContentCard>
  )
}
