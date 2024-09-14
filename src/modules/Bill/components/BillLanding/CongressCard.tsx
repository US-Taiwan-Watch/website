import UCardHeader from '@/common/components/atoms/UCardHeader'
import { CongressIcon } from '@/common/styles/assets/Icons'
import { CardContent, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { UContentCardWithHeader } from '@/common/components/atoms/UContentCard'

export default function CongressCard() {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCardWithHeader>
      <UCardHeader
        title="Congressional Distribution"
        icon={<CongressIcon />}
        iconColor="primary"
        action={
          <UIconButton variant="rounded" color="inherit" size="small">
            <ErrorOutlineOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        }
      />
      <CardContent sx={{ padding: 0 }}></CardContent>
    </UContentCardWithHeader>
  )
}
