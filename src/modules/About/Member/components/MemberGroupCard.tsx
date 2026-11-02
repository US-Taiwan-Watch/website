'use client'

import { Grid2, Stack, Typography, useTheme } from '@mui/material'
import { MemberGroup } from '@/modules/About/Member/business/Member'
import MemberCard from '@/modules/About/Member/components/MemberCard'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { USTWTheme } from '@/common/lib/mui/theme'

type MemberGroupCardProps = {
  memberGroup: MemberGroup
}

export default function MemberGroupCard({ memberGroup }: MemberGroupCardProps) {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('about_member')

  return (
    <Stack
      width="100%"
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
        backgroundColor: theme.color.about.card.backgroundColor,
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
