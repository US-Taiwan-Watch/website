'use client'

import { Party } from '@/common/enums/Party'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import itemSeries from 'highcharts/modules/item-series'
import { useMemo, useState } from 'react'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import ChartLegend from '@/modules/Bill/components/ChartLegend'

itemSeries(Highcharts)

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
  const { partyColor } = usePartyColor()
  const theme = useTheme<USTWTheme>()
  const [hoveredParty, setHoveredParty] = useState<Party | null>(null)

  const dataPartyCountMap = useMemo<
    Map<ParliamentChartData['party'], ParliamentChartData['count']>
  >(() => new Map(data.map((item) => [item.party, item.count])), [data])

  const subtitle = useMemo<string>(() => {
    if (hoveredParty) {
      return `${dataPartyCountMap.get(hoveredParty)}`
    }
    return `${CONGRESS_CURRENT_SESSION_MOCK}th`
  }, [dataPartyCountMap, hoveredParty])

  const options: Highcharts.Options = useMemo(() => {
    return {
      chart: {
        type: 'item',
      },

      title: {
        text: '',
      },

      subtitle: {
        text: subtitle,
        align: 'center',
        verticalAlign: 'middle',
        y: 150,
        style: {
          fontSize: '54px',
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
          data: data.map((item) => [
            item.party,
            item.count,
            partyColor[item.party] || partyColor[Party.OTHER],
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

      // TODO: 根據 RWD 調整參數
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 600,
            },
          },
        ],
      },

      legend: {
        enabled: false,
      },

      // hide highcharts logo
      credits: {
        enabled: false,
      },
    }
  }, [
    data,
    hoveredParty,
    partyColor,
    setHoveredParty,
    subtitle,
    theme.color.common.black,
  ])

  return (
    <>
      <ChartLegend data={data} hoveredParty={hoveredParty} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
