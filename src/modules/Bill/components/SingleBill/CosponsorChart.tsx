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
import { Box, Typography } from '@mui/material'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  data: ParliamentChartData[]
}

const CosponsorChart = ({ data }: Props) => {
  const { t } = useTranslationClient(['bill', 'common'])
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
        height: 160,
        width: 300,
      },
      title: {
        text: amount,
        align: 'center',
        verticalAlign: 'middle',
        y: 50,
        style: {
          fontSize: '42px',
        },
      },
      tooltip: {
        formatter: function () {
          const partyKey = (this.point.name as string).toLowerCase()
          const translatedParty = t(`party.${partyKey}`, { ns: 'common' })
          return `<b>${translatedParty}</b>: ${this.y}`
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
          size: '220%',
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
          name: t('page.card.cosponsors.title', {
            ns: 'bill',
          }),
          innerSize: '80%',
          keys: ['name', 'y', 'color', 'opacity'],
          data: data.map((item) => [
            item.party,
            item.count,
            partyColor[item.party] || partyColor[Party.INDEPENDENT],
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
    [amount, data, hoveredParty, partyColor, setHoveredParty, t]
  )

  // Handle empty or invalid data
  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 4,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {t('page.card.cosponsors.noData', {
            ns: 'bill',
          })}
        </Typography>
      </Box>
    )
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <ChartLegend data={data} hoveredParty={hoveredParty} />
    </>
  )
}

export default CosponsorChart
