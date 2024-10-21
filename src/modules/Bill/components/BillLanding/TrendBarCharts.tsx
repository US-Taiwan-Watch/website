'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import { ROUTES } from '@/routes'
import { useTheme, Slider, Box } from '@mui/material'
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
import {
  CONGRESS_CURRENT_SESSION_MOCK,
  CONGRESS_START_MOCK,
} from '@/modules/Bill/data'
import { useMemo, useState, useEffect } from 'react'

const xLabelFormatter = (value: number | null) => (value ? `${value}th` : '')

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
  const [congressRange, setCongressRange] = useState<number[]>([
    CONGRESS_START_MOCK,
    CONGRESS_CURRENT_SESSION_MOCK,
  ])
  const [debouncedCongressRange, setDebouncedCongressRange] =
    useState<number[]>(congressRange)

  const handleSliderChange = (
    _: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return

    const minDistance = 1
    if (activeThumb === 0) {
      setCongressRange([
        Math.min(newValue[0], congressRange[1] - minDistance),
        congressRange[1],
      ])
    } else {
      setCongressRange([
        congressRange[0],
        Math.max(newValue[1], congressRange[0] + minDistance),
      ])
    }
  }

  const filteredData = useMemo(
    () =>
      data.filter(
        (item) =>
          item.congress >= debouncedCongressRange[0] &&
          item.congress <= debouncedCongressRange[1]
      ),
    [data, debouncedCongressRange]
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCongressRange(congressRange)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [congressRange])

  return (
    <>
      <ResponsiveChartContainer
        dataset={filteredData}
        xAxis={[
          {
            label: 'Congress',
            scaleType: 'band',
            dataKey: 'congress',
            valueFormatter: xLabelFormatter,
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

      <Box mt={1} px={6}>
        <Slider
          value={congressRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={CONGRESS_START_MOCK}
          max={CONGRESS_CURRENT_SESSION_MOCK}
          color="secondary"
        />
      </Box>
    </>
  )
}
