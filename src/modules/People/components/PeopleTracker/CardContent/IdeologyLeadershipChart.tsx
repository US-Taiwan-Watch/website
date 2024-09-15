import UCardHeader from '@/common/components/atoms/UCardHeader'
import { LineChartIcon } from '@/common/styles/assets/Icons'
import { CardContent, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const IdeologyLeadershipChart = function IdeologyLeadershipChart() {
  const theme = useTheme<USTWTheme>()

  return (
    <>
      <UCardHeader
        title="Ideology-Leadership Chart"
        icon={<LineChartIcon />}
        iconColor="secondary"
        action={
          <UIconButton variant="rounded" color="inherit" size="small">
            <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
          </UIconButton>
        }
      />
      <CardContent></CardContent>
    </>
  )
}

export default IdeologyLeadershipChart
