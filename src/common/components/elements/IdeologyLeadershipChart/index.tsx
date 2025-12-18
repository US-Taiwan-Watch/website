'use client'

import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { useTheme } from '@mui/material'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { memo, useCallback, useMemo } from 'react'

type IdeologyLeadershipDataItem = {
  ID: string
  ideology: string
  leadership: string
  name: string
  party: string
  description: string
  introduced_bills_118: string
  cosponsored_bills_118: string
  unique_cosponsors_118: string
  total_cosponsors_118: string
}

type CustomPoint = Highcharts.Point & {
  item?: IdeologyLeadershipDataItem
}

interface IdeologyLeadershipChartProps {
  activeId?: string
  /**
   * @example
   * {
   *   Democratic: [...],
   *   Republican: [...],
   *   Independents: [...],
   * }
   */
  data: Record<string, Array<IdeologyLeadershipDataItem>>
}

const IdeologyLeadershipChart = function IdeologyLeadershipChart({
  activeId,
  data,
}: IdeologyLeadershipChartProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient(['common'])

  const getMarker = useCallback(
    (party: string): Highcharts.PointMarkerOptionsObject => {
      switch (party) {
        case 'Democratic':
          return {
            symbol: 'circle',
            fillColor: theme.color.indigo[600],
          }
        case 'Republican':
          return {
            symbol: 'circle',
            fillColor: theme.color.red[500],
          }
        default:
          return {
            symbol: 'circle',
            fillColor: theme.color.grey[500],
          }
      }
    },
    [theme]
  )

  const series = useMemo<Highcharts.SeriesOptionsType[]>(() => {
    let activePiece: Highcharts.SeriesOptionsType | undefined

    const restSeries: Highcharts.SeriesOptionsType[] = Object.entries(data).map(
      ([party, data]) => ({
        id: party,
        name: t(`party.${party.toLowerCase()}`, { ns: 'common' }),
        type: 'scatter',
        data: data.map((item) => {
          if (activeId && item.ID === activeId) {
            // 若有 activeId，則不顯示在 series 中，而是另外處理
            activePiece = {
              id: item.ID,
              name: item.name,
              type: 'scatter',
              data: [
                {
                  x: Number(item.ideology),
                  y: Number(item.leadership),
                  name: item.name,
                  // @ts-expect-error Highcharts 實際可以把 metadata 塞進去
                  item,
                },
              ],
              marker: {
                symbol: 'triangle',
                fillColor: theme.color.pink[1000],
                radius: isMobile ? 4 : 8,
              },
              zIndex: 10,
            }
            return null
          } else {
            return {
              x: Number(item.ideology),
              y: Number(item.leadership),
              name: item.name,
              item,
              zIndex: 1,
              marker: {
                radius: isMobile ? 2 : 4,
              },
            }
          }
        }),
        marker: getMarker(party),
      })
    )

    // 讓 active person 的 legend 顯示在前面
    return [...(activePiece ? [activePiece] : []), ...restSeries]
  }, [t, data, getMarker, activeId, theme, isMobile])

  const options = useMemo<Highcharts.Options>(() => {
    return {
      chart: {
        type: 'scatter',
      },

      title: {
        text: '',
      },

      // 置放在圖表內部頂端
      legend: {
        align: 'center',
        verticalAlign: 'top',
        x: 0,
        y: 0,
      },

      xAxis: {
        title: {
          text: t('ideologyLeadershipChart.xAxis.label', { ns: 'common' }),
          style: {
            fontSize: '10px',
          },
        },
        startOnTick: true,
        endOnTick: true,
        labels: {
          enabled: false,
        },
      },

      yAxis: {
        title: {
          text: t('ideologyLeadershipChart.yAxis.label', { ns: 'common' }),
          style: {
            fontSize: '10px',
          },
        },
        startOnTick: true,
        endOnTick: true,
        labels: {
          enabled: false,
        },
      },

      series,

      tooltip: {
        useHTML: true,
        formatter: function () {
          const point = this.point as CustomPoint
          return `
          <div>
              <strong>${t('ideologyLeadershipChart.tooltip.name.title', { ns: 'common' })}:</strong> ${point.item?.name}<br>
              <strong>${t('ideologyLeadershipChart.tooltip.description.title', { ns: 'common' })}:</strong> ${point.item?.description}<br>
              <strong>${t('ideologyLeadershipChart.tooltip.ideology.title', { ns: 'common' })}:</strong> ${point.x ? Number(point.x).toFixed(2) : 0}<br>
              <strong>${t('ideologyLeadershipChart.tooltip.leadership.title', { ns: 'common' })}:</strong> ${point.y ? Number(point.y).toFixed(2) : 0}<br>
          </div>
        `
        },
      },

      // hide highcharts logo
      credits: {
        enabled: false,
      },
    }
  }, [t, series])

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default memo(IdeologyLeadershipChart)
