import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { PieChart, PieChartProps } from '@mui/x-charts'
import type React from 'react'
import { useMemo } from 'react'
import UContentCard from '@/common/components/atoms/UContentCard'

// TODO: 確認比例來源
const MOCK_VOTES_WITH_PARTY_PERCENTAGE = 96.12345

const useVotesWithPartyPercentage = () => {
  const theme = useTheme<USTWTheme>()

  // TODO: Query
  const [percentage, data] = useMemo<
    [number, PieChartProps['series'][number]['data']]
  >(() => {
    // 呈現數據用，把小數點處理掉
    const percentage = Math.ceil(MOCK_VOTES_WITH_PARTY_PERCENTAGE)
    const rest = 100 - percentage

    return [
      percentage,
      [
        { value: percentage, color: theme.color.purple[100] },
        { value: rest, color: theme.color.grey[1700] },
      ],
    ]
  }, [theme])

  return { percentage, data }
}

const PieCenterLabel = function PieCenterLabel({ value }: { value: number }) {
  return (
    <Box
      display="flex"
      alignItems="end"
      justifyContent="center"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography variant="h3" fontWeight={700} lineHeight={1}>
        {value}
      </Typography>
      <Typography variant="subtitleM" fontWeight={700}>
        %
      </Typography>
    </Box>
  )
}

const VotesWithParty = function VotesWithParty() {
  const { percentage, data } = useVotesWithPartyPercentage()
  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Votes with Party',
        icon: <PeopleCheckIcon />,
        iconColor: 'secondary',
      }}
    >
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Box
          width={220}
          height={220}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <PieChart
            series={[
              {
                data,
                innerRadius: 70,
                outerRadius: 90,
              },
            ]}
            width={200}
            height={200}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            slotProps={{
              legend: { hidden: true },
            }}
            sx={{
              overflow: 'visible',
            }}
          />
          <PieCenterLabel value={percentage} />
        </Box>
        <Typography variant="subtitleM" fontWeight={400} textAlign="center">
          This statistical data comes from the records of the current
          Parliament.
        </Typography>
      </Stack>
    </UContentCard>
  )
}

export default VotesWithParty
