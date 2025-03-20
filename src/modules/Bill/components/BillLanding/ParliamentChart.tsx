'use client'

import { Party } from '@/common/enums/Party'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import itemSeries from 'highcharts/modules/item-series'
import { useMemo, useState } from 'react'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import ChartLegend from '@/modules/Bill/components/ChartLegend'
import { CongressUtils } from '@/common/business/Congress'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

if (typeof window !== 'undefined') {
  itemSeries(Highcharts)
}

export type ParliamentChartData = {
  party: Party
  count: number
}

export type HoveredData = {
  name: Party
} & EventTarget

type Props = {
  data: ParliamentChartData[]
}

// example: https://codesandbox.io/p/sandbox/highcharts-react-demo-forked-rlflfn?file=%2Fdemo.jsx%3A23%2C1
export default function ParliamentChart({ data }: Props) {
  const { isMobile } = useResponsive()
  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const { partyColor } = usePartyColor()
  const theme = useTheme<USTWTheme>()

  const sortedData = useMemo(() => {
    return data.sort((a, b) => b.count - a.count)
  }, [data])

  const [hoveredParty, setHoveredParty] = useState<Party | null>(null)

  const dataPartyCountMap = useMemo<
    Map<ParliamentChartData['party'], ParliamentChartData['count']>
  >(() => new Map(data.map((item) => [item.party, item.count])), [data])

  const subtitle = useMemo<string>(() => {
    if (hoveredParty) {
      return `${dataPartyCountMap.get(hoveredParty)}`
    }
    return `${currentCongressNumber}th`
  }, [dataPartyCountMap, hoveredParty, currentCongressNumber])

  const options: Highcharts.Options = useMemo(() => {
    return {
      chart: {
        type: 'item',
        width: isMobile ? 300 : 600,
        height: isMobile ? 200 : 400,
      },

      title: {
        text: '',
      },

      subtitle: {
        text: subtitle,
        align: 'center',
        verticalAlign: 'middle',
        y: isMobile ? 70 : 150,
        style: {
          fontSize: isMobile ? '32px' : '54px',
          fontWeight: 'bold',
          color: theme.color.common.black,
        },
      },

      tooltip: {
        enabled: false,
      },

      series: [
        {
          type: 'item',
          keys: ['name', 'y', 'color', 'opacity'],
          data: sortedData.map((item) => [
            item.party,
            item.count,
            partyColor[item.party] || partyColor[Party.INDEPENDENT],
            hoveredParty && hoveredParty !== item.party ? 0.6 : 1,
          ]),
          dataLabels: {
            enabled: false,
          },
          center: ['50%', '88%'],
          size: '170%',
          startAngle: -90,
          endAngle: 90,
          point: {
            events: {
              mouseOver: function (e) {
                setHoveredParty((e.target as HoveredData)?.name ?? null)
              },
              mouseOut: function () {
                setHoveredParty(null)
              },
            },
          },
        },
      ],

      legend: {
        enabled: false,
      },

      // hide highcharts logo
      credits: {
        enabled: false,
      },
    }
  }, [
    isMobile,
    sortedData,
    hoveredParty,
    partyColor,
    setHoveredParty,
    subtitle,
    theme.color.common.black,
  ])

  return (
    <>
      <ChartLegend data={sortedData} hoveredParty={hoveredParty} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
