'use client'
import { Typography } from '@mui/material'
import { useMemo } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import CircleIcon from '@mui/icons-material/Circle'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { Party } from '@/common/enums/Party'
import { ParliamentChartData } from '@/modules/Bill/components/BillLanding/ParliamentChart'

type LegendProps = {
  data: ParliamentChartData[]
  hoveredParty: Party | null
}

export default function ChartLegend({ data, hoveredParty }: LegendProps) {
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
