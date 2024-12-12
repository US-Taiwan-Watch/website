'use client'

import { TrendIcon } from '@/common/styles/assets/Icons'
import { Box, MenuItem, Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UHStack from '@/common/components/atoms/UHStack'
import TrendBarCharts, {
  TrendBarChartData,
} from '@/modules/Bill/components/BillLanding/TrendBarCharts'
import UContentCard from '@/common/components/atoms/UContentCard'
import useBillFilterOptions from '@/modules/Bill/components/BillFilter/useBillFilterOptions'
import USelect from '@/common/components/atoms/USelect'
import { useMemo, useState } from 'react'
import {
  BILL_TREND_CHART_DATA_MOCK,
  getBillTrendByCategory,
} from '@/modules/Bill/data'
import { groupBy, map, sumBy } from 'lodash-es'
import { BillCategoryEnum } from '@/modules/Bill/components/BillFilter/enums'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'

// TODO: 先假設資料是以此格式一筆筆紀錄，後續按照實際資料格式調整
export type BillTrendData = {
  congress: number
  count: number
  category: BillCategoryEnum
}

const getChartData = (data: BillTrendData[]) => {
  return map(groupBy(data, 'congress'), (item) => ({
    congress: item[0].congress,
    count: sumBy(item, 'count'),
  }))
}

// TODO: 此處還沒 API mock data
const dataAll: TrendBarChartData[] = getChartData(BILL_TREND_CHART_DATA_MOCK)

export default function TrendCard() {
  const theme = useTheme<USTWTheme>()
  const router = useRouter()
  const { categoryOptions } = useBillFilterOptions()
  const [selectedCategory, setSelectedCategory] = useState('')

  const chartData = useMemo<TrendBarChartData[]>(() => {
    if (selectedCategory === '') return dataAll
    const data = getBillTrendByCategory(selectedCategory)
    return data
  }, [selectedCategory])

  const totalCount = useMemo<number>(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [chartData])

  const onBarClick = (clickedData: TrendBarChartData) => {
    const params = new URLSearchParams()
    if (selectedCategory) {
      params.set('category', selectedCategory)
    }
    params.set('congress', clickedData.congress.toString())
    router.push(`${ROUTES.BILL_LIST}?${params.toString()}`)
  }

  return (
    <UContentCard
      headerIconAction="tooltip"
      withHeader
      headerProps={{
        title: 'Trends by Category',
        icon: <TrendIcon />,
        iconColor: 'primary',
      }}
      tooltipProps={{
        content: 'Trends by Category',
      }}
    >
      <Stack mt={3} px={1.5}>
        <UHStack justifyContent="space-between">
          <Stack spacing={1}>
            <Typography variant="menu" color={theme.color.grey[2200]}>
              Total
            </Typography>
            <Typography variant="h4">{totalCount}</Typography>
          </Stack>

          <Box>
            <USelect
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(String(e.target.value))}
            >
              <MenuItem value="">All</MenuItem>
              {categoryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </USelect>
          </Box>
        </UHStack>
        <Box width="100%">
          <TrendBarCharts data={chartData} onBarClick={onBarClick} />
        </Box>
      </Stack>
    </UContentCard>
  )
}
