'use client'

import DOMPurify from 'dompurify'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import { OpinionAuthor } from '@/modules/Opinion/classes/OpinionAuther'

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
      {author.descriptionHtml && (
        <Typography
          variant="bodyS"
          component={'p'}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(author.descriptionHtml),
          }}
          sx={{
            color: theme.color.neutral[500],
          }}
        />
      )}
    </Stack>
  )
}

export default memo(OpinionPostAuthor)
