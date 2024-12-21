'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { TrackerIcon } from '@/common/styles/assets/Icons'
import { Box } from '@mui/material'
import UTimeline from '@/common/components/atoms/UTimeline'
import { Bill } from '@/modules/Bill/classes/Bill'

type Props = {
  bill: Bill
}

export default function BillTracker({ bill }: Props) {
  return (
    <UContentCard
      headerIconAction="tooltip"
      withHeader
      headerProps={{
        title: 'Tracker',
        icon: <TrackerIcon />,
        iconColor: 'primary',
      }}
      tooltipProps={{
        content: 'Tracker',
      }}
    >
      <Box pt={2} px={1}>
        <UTimeline
          data={Bill.getAllBillStatuses(bill).map((status) => ({
            title: Bill.GetBillStatusText(status),
          }))}
          activeIndex={Bill.getStatusIndex(bill)}
          itemMinHeight={50}
        />
      </Box>
    </UContentCard>
  )
}
