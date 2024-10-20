'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import { ROUTES } from '@/routes'
import { useTheme } from '@mui/material'
import {
  axisClasses,
  BarPlot,
  ChartsGrid,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  ResponsiveChartContainer,
} from '@mui/x-charts'
import { useRouter } from 'next/navigation'

const valueFormatter = (value: number | null) => (value ? `${value}th` : '')

export type TrendBarChartData = {
  congress: number
  count: number
}

type TrendBarChartsProps = {
  data: TrendBarChartData[]
}

export default function TrendBarCharts({ data }: TrendBarChartsProps) {
  const theme = useTheme<USTWTheme>()
  const router = useRouter()

  return (
    <ResponsiveChartContainer
      dataset={data}
      xAxis={[
        {
          label: 'Congress',
          scaleType: 'band',
          dataKey: 'session',
          valueFormatter,
        },
      ]}
      yAxis={[{ label: 'Bill Count' }]}
      series={[
        {
          type: 'bar',
          dataKey: 'count',
          color: theme.color.neutral[200],
        },
      ]}
      height={300}
      sx={{
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            strokeWidth: 0,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: theme.color.grey[2300],
          },
          [`.${axisClasses.label}`]: {
            fill: theme.color.grey[2300],
          },
        },
      }}
    >
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsGrid vertical horizontal />
      <ChartsTooltip />
      <BarPlot
        grid={{ vertical: true, horizontal: true }}
        borderRadius={4}
        barLabel="value"
        onItemClick={() => router.push(ROUTES.BILL_LIST)}
      />
    </ResponsiveChartContainer>
  )
}
