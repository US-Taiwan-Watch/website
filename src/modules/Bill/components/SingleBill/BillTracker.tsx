'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import { TrackerIcon } from '@/common/styles/assets/Icons'
import { Box, CardContent, useTheme } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import UTimeline from '@/common/components/atoms/UTimeline'
import { billStatusList } from '@/modules/Bill/constants'
import { Bill } from '@/modules/Bill/classes/Bill'

type Props = {
  bill: Bill
}

export default function BillTracker({ bill }: Props) {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Tracker',
        icon: <TrackerIcon />,
        iconColor: 'primary',
        action: (
          <UIconButton variant="rounded" color="inherit" size="small">
            <InfoOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        ),
      }}
    >
      <CardContent>
        <Box pt={2} px={1}>
          <UTimeline
            data={billStatusList}
            activeIndex={bill.statusIndex}
            itemMinHeight={50}
          />
        </Box>
      </CardContent>
    </UContentCard>
  )
}
