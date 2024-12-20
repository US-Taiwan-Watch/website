import { People } from '@/modules/People/classes/People'
import UPoliticalPartyIcon, {
  getMainColor,
} from '@/common/components/atoms/UPoliticalPartyIcon'
import { Party } from '@/common/enums/Party'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'

interface PeopleAvatarProps {
  people: People
}

const PeopleAvatar = function PeopleAvatar({ people }: PeopleAvatarProps) {
  const theme = useTheme<USTWTheme>()

  if (!people.party || !people.image) return null

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <UPoliticalPartyIcon
          variant="rounded"
          party={people.party}
          size="small"
        />
      }
      sx={{
        width: 80,
        height: 80,
      }}
    >
      <Avatar
        sx={{
          width: 80,
          height: 80,
          border: `5px solid ${getMainColor(theme, Party.DEMOCRATIC)}`,
        }}
        alt={people.name}
        src={people.image}
      />
    </Badge>
  )
}

export default PeopleAvatar
