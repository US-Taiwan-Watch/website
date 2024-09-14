import UCardHeader from '@/common/components/atoms/UCardHeader'
import { BriefcaseIcon } from '@/common/styles/assets/Icons'
import { CardContent, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'

const Experience = function Experience() {
  const theme = useTheme<USTWTheme>()

  return (
    <>
      <UCardHeader
        title="Experience"
        icon={<BriefcaseIcon />}
        iconColor="primary"
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

export default Experience
