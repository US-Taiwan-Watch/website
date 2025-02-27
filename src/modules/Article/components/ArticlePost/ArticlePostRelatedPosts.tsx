'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULinkText from '@/common/components/atoms/ULinkText'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article } from '@/modules/Article/business/Article'
import ArticlePostCards from '@/modules/Article/components/ArticlePostCards'
import { ROUTES } from '@/routes'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

interface ArticlePostRelatedPostsProps {
  articles?: Array<Article>
}

const ArticlePostRelatedPosts = ({
  articles,
}: ArticlePostRelatedPostsProps) => {
  const theme = useTheme<USTWTheme>()

  if (!articles || !articles.length) return null

  return (
    <Stack spacing={6} marginTop={10} marginBottom={16}>
      <UHStack gap={2} alignItems="center" justifyContent="space-between">
        <Typography variant="h2" fontWeight={600}>
          More Articles
        </Typography>
        <ULinkText
          link={ROUTES.ARTICLE}
          typographyProps={{
            fontWeight: 500,
            fontSize: 20,
            sx: {
              color: theme.color.common.black,
            },
          }}
        />
      </UHStack>

      <ArticlePostCards articles={articles} pagination={false} />
    </Stack>
  )
}

export default memo(ArticlePostRelatedPosts)
