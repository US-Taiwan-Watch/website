'use client'

import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import { ArticleAuthor } from '@/modules/Article/business/ArticleAuther'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface ArticlePostAuthorProps {
  author: ArticleAuthor
}

const ArticlePostAuthor = function ArticlePostAuthor({
  author,
}: ArticlePostAuthorProps) {
  const { t } = useTranslationClient(['article'])
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={1}>
      <Typography
        variant="bodyS"
        sx={{ color: theme.color.article.postAuthorTitle }}
        fontWeight={700}
      >
        {t('page.author.title', { ns: 'article' })}
      </Typography>
      {author.name && (
        <Typography
          variant="subtitleM"
          sx={{ color: theme.color.article.postAuthorName }}
          fontWeight={700}
        >
          {author.name}
        </Typography>
      )}
      {author.description && (
        <Typography
          variant="bodyS"
          component={'p'}
          sx={{
            color: theme.color.article.postAuthorDescription,
          }}
        >
          {author.description}
        </Typography>
      )}
    </Stack>
  )
}

export default memo(ArticlePostAuthor)
