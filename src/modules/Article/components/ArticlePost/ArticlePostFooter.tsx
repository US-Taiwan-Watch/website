'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article } from '@/modules/Article/business/Article'
import ArticlePostTag from '@/modules/Article/components/ArticlePost/ArticlePostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

interface ArticlePostFooterProps {
  tags?: Article['tags']
  resources?: Article['repostSources']
}

const ArticlePostFooter = function ArticlePostFooter({
  tags,
  resources,
}: ArticlePostFooterProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={2}>
      {/** Tags */}
      {tags && tags.length > 0 && (
        <UHStack gap={1}>
          {tags.map((tag, index) => (
            <ArticlePostTag key={index} tag={tag} />
          ))}
        </UHStack>
      )}

      {/** Resources */}
      {resources && resources.length > 0 && (
        <Stack spacing={1} sx={{ color: theme.color.grey[3400] }}>
          <Typography variant="bodyS" fontWeight={500}>
            Repost source from:{' '}
          </Typography>
          {resources.map((resource, index) => (
            <a href={resource.link} key={index} target="_blank">
              <Typography
                variant="bodyS"
                fontWeight={400}
                sx={{
                  textDecoration: 'underline',
                }}
              >
                {resource.title}
              </Typography>
            </a>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default memo(ArticlePostFooter)
