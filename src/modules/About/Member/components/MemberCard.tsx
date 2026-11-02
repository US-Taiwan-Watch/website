'use client'

import { Member } from '@/modules/About/Member/business/Member'
import { Typography, Stack, Avatar } from '@mui/material'

type MemberCardProps = {
  member: Member
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Stack direction="row" gap={2}>
      <Avatar
        src={member.image}
        alt={member.name}
        sx={{
          width: 80,
          height: 80,
        }}
      />
      <Stack
        gap={{
          xs: 1,
          md: 1.5,
        }}
      >
        <Typography
          sx={{
            fontSize: '1.25rem',
            fontWeight: 700,
          }}
        >
          {member.name}
        </Typography>
        <Typography>{member.description}</Typography>
      </Stack>
    </Stack>
  )
}
