import { Grid2, Stack, Typography } from '@mui/material'
import { MemberGroup } from '@/modules/About/Member/business/Member'
import MemberCard from '@/modules/About/Member/components/MemberCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Language } from '@/common/lib/i18n/types'

type MemberGroupCardProps = {
  lang: Language
  memberGroup: MemberGroup
}

export default async function MemberGroupCard({
  lang,
  memberGroup,
}: MemberGroupCardProps) {
  const { t } = await getTranslationServer(lang, 'about_member')

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
      <Typography variant="subtitleXL">
        {t(`member.type.${memberGroup.type}`)}
      </Typography>
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
