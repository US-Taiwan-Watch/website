'use client'

import { TrendIcon } from '@/common/styles/assets/Icons'
import { Box, CardContent, Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UHStack from '@/common/components/atoms/UHStack'
import TrendBarCharts from '@/modules/Bill/components/BillLanding/TrendBarCharts'
import UContentCard from '@/common/components/atoms/UContentCard'
import UCardInfo from '@/common/components/atoms/UCardInfo'

export default function TrendCard() {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Trends by Category',
        icon: <TrendIcon />,
        iconColor: 'primary',
        action: <UCardInfo content="Trends by Category" />,
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Stack mt={3} px={1.5}>
          <UHStack>
            <Stack spacing={1}>
              <Typography variant="menu" color={theme.color.grey[2200]}>
                Total
              </Typography>
              <Typography variant="h4">2048</Typography>
            </Stack>
            {/* TODO: filter */}
          </UHStack>
          <Box width="100%">
            <TrendBarCharts />
          </Box>
        </Stack>
      </CardContent>
    </UContentCard>
  )
}
