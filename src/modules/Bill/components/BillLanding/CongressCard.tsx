'use client'

import { CongressIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import UContentCard from '@/common/components/atoms/UContentCard'
import ParliamentChart, {
  ParliamentChartData,
} from '@/modules/Bill/components/BillLanding/ParliamentChart'
import {
  PARLIAMENT_CHART_DATA_MOCK_1,
  PARLIAMENT_CHART_DATA_MOCK_2,
} from '@/modules/Bill/data'
import { useMemo, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UButton from '@/common/components/atoms/UButton'
import { ChamberEnum } from '@/common/enums/Chamber'

export default function CongressCard() {
  const theme = useTheme<USTWTheme>()
  const [selectedChamber, setSelectedChamber] = useState<ChamberEnum>(
    ChamberEnum.HOUSE
  )

  const data = useMemo<ParliamentChartData[]>(() => {
    if (selectedChamber === ChamberEnum.HOUSE) {
      return PARLIAMENT_CHART_DATA_MOCK_1
    }
    return PARLIAMENT_CHART_DATA_MOCK_2
  }, [selectedChamber])

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Congressional Distribution',
        icon: <CongressIcon />,
        iconColor: 'primary',
        action: (
          <UIconButton variant="rounded" color="inherit" size="small">
            <ErrorOutlineOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        ),
      }}
    >
      <CardContent sx={{ padding: 0 }}>
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
      </CardContent>
    </UContentCard>
  )
}
