'use client'

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { useMemo, useState } from 'react'
import {
  HoveredData,
  ParliamentChartData,
} from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { Party } from '@/common/enums/Party'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import ChartLegend from '@/modules/Bill/components/ChartLegend'

type Props = {
  data: ParliamentChartData[]
}

const CosponsorChart = ({ data }: Props) => {
  const { partyColor } = usePartyColor()
  const [hoveredParty, setHoveredParty] = useState<Party | null>(null)

  const dataPartyCountMap = useMemo<
    Map<ParliamentChartData['party'], ParliamentChartData['count']>
  >(() => new Map(data.map((item) => [item.party, item.count])), [data])

  const totalCount = useMemo<number>(() => {
    return data.reduce((acc, item) => acc + item.count, 0)
  }, [data])

  const amount = useMemo<string>(() => {
    if (hoveredParty) {
      return `${dataPartyCountMap.get(hoveredParty)}`
    }
    return totalCount.toString()
  }, [dataPartyCountMap, hoveredParty, totalCount])

  const options: Highcharts.Options = useMemo(
    () => ({
      chart: {
        type: 'pie',
        height: 150,
      },
      title: {
        text: amount,
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
          fontSize: '42px',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '100%'],
          size: '170%',
          borderWidth: 0,
          borderRadius: 0,
        },
        series: {
          states: {
            hover: {
              halo: {
                size: 0,
              },
            },
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Cosponsors',
          innerSize: '80%',
          keys: ['name', 'y', 'color', 'opacity'],
          data: data.map((item) => [
            item.party,
            item.count,
            partyColor[item.party] || partyColor[Party.OTHER],
            hoveredParty && hoveredParty !== item.party ? 0.6 : 1,
          ]),
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
      credits: {
        enabled: false,
      },
    }),
    [amount, data, hoveredParty, partyColor, setHoveredParty]
  )

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <ChartLegend data={data} hoveredParty={hoveredParty} />
    </>
  )
}

export default CosponsorChart
