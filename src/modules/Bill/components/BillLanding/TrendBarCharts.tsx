'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
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
import { useMemo, useState, useEffect } from 'react'
import { CongressUtils } from '@/common/business/Congress'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const xLabelFormatter = (value: number | null) => (value ? `${value}th` : '')

export type TrendBarChartData = {
  congress: number
  count: number
}

type TrendBarChartsProps = {
  data: TrendBarChartData[]
  onBarClick?: (clickedData: TrendBarChartData) => void
}

export default function TrendBarCharts({
  data,
  onBarClick,
}: TrendBarChartsProps) {
  const { t } = useTranslationClient('bill')
  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const theme = useTheme<USTWTheme>()
  const [congressRange, setCongressRange] = useState<number[]>([
    CongressUtils.minCongressNumber(),
    currentCongressNumber,
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
            label: t('landing.card.trend.chart.xAxis.label', { ns: 'bill' }),
            scaleType: 'band',
            dataKey: 'congress',
            valueFormatter: xLabelFormatter,
          },
        ]}
        yAxis={[
          {
            label: t('landing.card.trend.chart.yAxis.label', { ns: 'bill' }),
            tickMinStep: 1,
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
          onItemClick={(_, { dataIndex }) =>
            onBarClick?.(filteredData[dataIndex])
          }
        />
      </ResponsiveChartContainer>

      <Box mt={1} px={6}>
        <Slider
          value={congressRange}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={CongressUtils.minCongressNumber()}
          max={currentCongressNumber}
          color="secondary"
          marks={[
            {
              value: CongressUtils.minCongressNumber(),
              label: `${CongressUtils.minCongressNumber()}th`,
            },
            {
              value: currentCongressNumber,
              label: `${currentCongressNumber}th`,
            },
          ]}
        />
      </Box>
    </>
  )
}
