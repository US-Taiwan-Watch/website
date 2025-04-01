'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article } from '@/modules/Article/business/Article'
import ArticlePostTag from '@/modules/Article/components/ArticlePost/ArticlePostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'
import Link from 'next/link'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface ArticlePostFooterProps {
  tags?: Article['tags']
  resources?: Article['repostSources']
}

const ArticlePostFooter = function ArticlePostFooter({
  tags,
  resources,
}: ArticlePostFooterProps) {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('article')

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
            {t('page.repostFrom', { ns: 'article' })}
          </Typography>
          {resources.map((resource, index) => (
            <Link
              href={resource.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="bodyS"
                fontWeight={400}
                sx={{
                  textDecoration: 'underline',
                }}
              >
                {resource.title}
              </Typography>
            </Link>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default memo(ArticlePostFooter)
