import { USTWTheme } from '@/common/lib/mui/theme'
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

type Data = {
  session: number
  count: number
}

const data: Data[] = [
  { session: 113, count: 15 },
  { session: 114, count: 25 },
  { session: 115, count: 17 },
  { session: 116, count: 15 },
  { session: 117, count: 17 },
  { session: 118, count: 25 },
]

const valueFormatter = (value: number | null) => (value ? `${value}th` : '')

export default function TrendBarCharts() {
  const theme = useTheme<USTWTheme>()

  return (
    <ResponsiveChartContainer
      dataset={data}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'session',
          valueFormatter,
        },
      ]}
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
            fill: theme.color.grey[2200],
          },
        },
      }}
    >
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsGrid vertical horizontal />
      <ChartsTooltip />
      <BarPlot grid={{ vertical: true, horizontal: true }} borderRadius={4} />
    </ResponsiveChartContainer>
  )
}
