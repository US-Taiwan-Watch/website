'use client'

import { CongressIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, Typography, useTheme } from '@mui/material'
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
import CircleIcon from '@mui/icons-material/Circle'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { Party } from '@/common/enums/Party'
import UButton from '@/common/components/atoms/UButton'
import { ChamberEnum } from '@/common/enums/Chamber'

type LegendProps = {
  data: ParliamentChartData[]
  hoveredParty: Party | null
}

function Legend({ data, hoveredParty }: LegendProps) {
  const { partyColor } = usePartyColor()
  const sortedData = useMemo(
    () => data.sort((a, b) => b.count - a.count),
    [data]
  )

  return (
    <UHStack spacing={2} flexWrap="wrap">
      {sortedData.map((item) => (
        <UHStack
          key={item.party}
          spacing={0.5}
          alignItems="center"
          sx={{
            opacity: hoveredParty && hoveredParty !== item.party ? 0.4 : 1,
          }}
        >
          <CircleIcon
            sx={{
              color: partyColor[item.party] || partyColor[Party.OTHER],
              fontSize: '12px',
            }}
          />
          <Typography variant="buttonXXS" textTransform="capitalize">
            {item.party.toLowerCase()}
          </Typography>
        </UHStack>
      ))}
    </UHStack>
  )
}

export default function CongressCard() {
  const theme = useTheme<USTWTheme>()
  const [selectedChamber, setSelectedChamber] = useState<ChamberEnum>(
    ChamberEnum.HOUSE
  )
  const [hoveredParty, setHoveredParty] = useState<Party | null>(null)

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
          <Legend data={data} hoveredParty={hoveredParty} />
          <ParliamentChart
            data={data}
            hoveredParty={hoveredParty}
            setHoveredParty={setHoveredParty}
          />
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
