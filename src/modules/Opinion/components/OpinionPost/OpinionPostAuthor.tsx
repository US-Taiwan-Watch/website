'use client'

import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import { OpinionAuthor } from '@/modules/Opinion/business/OpinionAuther'

interface OpinionPostAuthorProps {
  author: OpinionAuthor
}

const OpinionPostAuthor = function OpinionPostAuthor({
  author,
}: OpinionPostAuthorProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={1}>
      <Typography variant="bodyS" color="secondary" fontWeight={700}>
        作者
      </Typography>
      {author.name && (
        <Typography variant="subtitleM" fontWeight={700}>
          {author.name}
        </Typography>
      )}
      {author.description && (
        <Typography
          variant="bodyS"
          component={'p'}
          sx={{
            color: theme.color.neutral[500],
          }}
        >
          {author.description}
        </Typography>
      )}
    </Stack>
  )
}

export default memo(OpinionPostAuthor)
