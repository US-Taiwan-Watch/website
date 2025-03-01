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
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import { BillTrendByCategoryQuery } from '@/common/lib/graphql/__generated__/graphql'
import { useQuery } from '@apollo/client'
import { QUERY_BILL_TREND_BY_CATEGORY } from '@/modules/Bill/graphql/gql'
import { isNull, isUndefined } from 'lodash-es'

export default function TrendCard() {
  const theme = useTheme<USTWTheme>()
  const router = useRouter()
  const { categoryOptions } = useBillFilterOptions()
  const [selectedCategory, setSelectedCategory] = useState('')

  const { data } = useQuery<BillTrendByCategoryQuery>(
    QUERY_BILL_TREND_BY_CATEGORY,
    {
      variables: {
        ...(selectedCategory.length > 0 && { category: selectedCategory }),
      },
    }
  )
  const chartData = useMemo<TrendBarChartData[]>(() => {
    return (
      data?.BillTrendByCategory?.filter(
        (item) => !isNull(item) && !isUndefined(item.congress)
      ).map((item) => ({
        congress: item?.congress ?? 0,
        count: item?.billCount ?? 0,
      })) ?? []
    )
  }, [data])

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
