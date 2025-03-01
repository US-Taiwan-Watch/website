'use client'

import { CongressIcon } from '@/common/styles/assets/Icons'
import { Stack, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import ParliamentChart, {
  ParliamentChartData,
} from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { useMemo, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UButton from '@/common/components/atoms/UButton'
import { ChamberEnum } from '@/common/enums/Chamber'
import { CongressUtils } from '@/common/business/Congress'

// TODO: 從 API 拿資料
const PARLIAMENT_CHART_DATA_MOCK_HOUSE = Object.entries(
  CongressUtils.getHouseCongressMembers()
).map(
  ([party, count]) =>
    ({
      party,
      count,
    }) as ParliamentChartData
)

// TODO: 從 API 拿資料
const PARLIAMENT_CHART_DATA_MOCK_SENATE = Object.entries(
  CongressUtils.getSenateCongressMembers()
).map(
  ([party, count]) =>
    ({
      party,
      count,
    }) as ParliamentChartData
)

export default function CongressCard() {
  const theme = useTheme<USTWTheme>()
  const [selectedChamber, setSelectedChamber] = useState<ChamberEnum>(
    ChamberEnum.HOUSE
  )

  const data = useMemo<ParliamentChartData[]>(() => {
    if (selectedChamber === ChamberEnum.HOUSE) {
      return PARLIAMENT_CHART_DATA_MOCK_HOUSE
    }
    return PARLIAMENT_CHART_DATA_MOCK_SENATE
  }, [selectedChamber])

  return (
    <UContentCard
      headerIconAction="tooltip"
      withHeader
      headerProps={{
        title: 'Congressional Distribution',
        icon: <CongressIcon />,
        iconColor: 'primary',
      }}
      tooltipProps={{
        content: 'Congressional Distribution',
      }}
    >
      <Stack pt={2} alignItems="center">
        <ParliamentChart data={data} />
        <UHStack alignItems="center" justifyContent="center" spacing={2}>
          {[ChamberEnum.HOUSE, ChamberEnum.SENATE].map((congress) => (
            <UButton
              key={congress}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor:
                  selectedChamber === congress
                    ? theme.color.purple[100]
                    : theme.color.neutral[100],
                fontWeight: 600,
                fontSize: 16,
              }}
              rounded
              size="small"
              onClick={() => setSelectedChamber(congress)}
            >
              {congress}
            </UButton>
          ))}
        </UHStack>
      </Stack>
    </UContentCard>
  )
}
