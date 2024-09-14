import UCardHeader from '@/common/components/atoms/UCardHeader'
import { TrendIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, Typography, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { UContentCardWithHeader } from '@/common/components/atoms/UContentCard'
import UHStack from '@/common/components/atoms/UHStack'

export default function TrendCard() {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCardWithHeader>
      <UCardHeader
        title="Trends by Category"
        icon={<TrendIcon />}
        iconColor="primary"
        action={
          <UIconButton variant="rounded" color="inherit" size="small">
            <ErrorOutlineOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        }
      />
      <CardContent sx={{ padding: 0 }}>
        <Stack mt={3} px={1.5}>
          <UHStack>
            <Stack spacing={1}>
              <Typography variant="menu" color={theme.color.grey[2100]}>
                Total
              </Typography>
              <Typography variant="h4">2048</Typography>
            </Stack>
          </UHStack>
        </Stack>
      </CardContent>
    </UContentCardWithHeader>
  )
}
