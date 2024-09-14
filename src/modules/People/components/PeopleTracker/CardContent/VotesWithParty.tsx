import UCardHeader from '@/common/components/atoms/UCardHeader'
import { PeopleCheckIcon } from '@/common/styles/assets/Icons'
import { CardContent, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const VotesWithParty = function VotesWithParty() {
  const theme = useTheme<USTWTheme>()

  return (
    <>
      <UCardHeader
        title="Votes with Party"
        icon={<PeopleCheckIcon />}
        iconColor="secondary"
        action={
          <UIconButton variant="rounded" color="inherit" size="small">
            <InfoOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        }
      />
      <CardContent></CardContent>
    </>
  )
}

export default VotesWithParty
