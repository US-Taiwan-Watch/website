'use client'

import { TrendIcon } from '@/common/styles/assets/Icons'
import {
  Box,
  CardContent,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import UHStack from '@/common/components/atoms/UHStack'
import TrendBarCharts, {
  TrendBarChartData,
} from '@/modules/Bill/components/BillLanding/TrendBarCharts'
import UContentCard from '@/common/components/atoms/UContentCard'
import useBillFilterOptions from '@/modules/Bill/components/BillFilter/useBillFilterOptions'
import USelect from '@/common/components/atoms/USelect'
import { useMemo, useState } from 'react'

const dataAll: TrendBarChartData[] = [
  { session: 113, count: 15 },
  { session: 114, count: 25 },
  { session: 115, count: 17 },
  { session: 116, count: 15 },
  { session: 117, count: 17 },
  { session: 118, count: 25 },
]

export default function TrendCard() {
  const theme = useTheme<USTWTheme>()
  const { categoryOptions } = useBillFilterOptions()
  const [selectedCategory, setSelectedCategory] = useState('')

  // TODO: filter data by selected category
  const chartData = useMemo<TrendBarChartData[]>(() => {
    if (selectedCategory === '') return dataAll
    return [
      ...Array.from({ length: 6 }, (_, index) => ({
        session: 113 + index,
        count: Math.floor(Math.random() * 7),
      })),
    ]
  }, [selectedCategory])

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Trends by Category',
        icon: <TrendIcon />,
        iconColor: 'primary',
        action: (
          <UIconButton variant="rounded" color="inherit" size="small">
            <ErrorOutlineOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        ),
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Stack mt={3} px={1.5}>
          <UHStack justifyContent="space-between">
            <Stack spacing={1}>
              <Typography variant="menu" color={theme.color.grey[2200]}>
                Total
              </Typography>
              <Typography variant="h4">2048</Typography>
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
            <TrendBarCharts data={chartData} />
          </Box>
        </Stack>
      </CardContent>
    </UContentCard>
  )
}
