import { Grid2, Stack, Typography } from '@mui/material'
import { MemberGroup } from '@/modules/About/Member/business/Member'
import MemberCard from '@/modules/About/Member/components/MemberCard'

type MemberGroupCardProps = {
  memberGroup: MemberGroup
}

export default function MemberGroupCard({ memberGroup }: MemberGroupCardProps) {
  return (
    <Stack
      px={{
        xs: 2,
        md: 4,
        lg: 6,
      }}
      py={{
        xs: 2,
        md: 3,
        lg: 5,
      }}
      gap={{
        xs: 2,
        md: 3,
        lg: 5,
      }}
      sx={{
        borderRadius: '15px',
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="subtitleXL">{memberGroup.name}</Typography>
      <Grid2
        container
        spacing={{
          xs: 2,
          md: 3,
          lg: 5,
        }}
      >
        {memberGroup.members.map((member) => (
          <Grid2
            key={member.id}
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <MemberCard member={member} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  )
}
