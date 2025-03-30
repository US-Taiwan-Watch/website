'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import ArticlePostTag from '@/modules/Article/components/ArticlePost/ArticlePostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { BookmarkIcon, OutlinedShareIcon } from '@/common/styles/assets/Icons'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
const dateFormat = 'YYYY-MM-DD'

// TODO: 定義介面

interface ArticlePostHeaderProps {
  article: Article
}

const ArticlePostHeader = function ArticlePostHeader({
  article,
}: ArticlePostHeaderProps) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['article'])
  const { categories, title, subtitle, date, tags, repostSources, authors } =
    article
  const theme = useTheme<USTWTheme>()

  const formattedDate = useMemo(() => {
    if (!date) return ''
    const dayjsDate = dayjs(date)
    return dayjsDate.isValid() ? dayjsDate.format(dateFormat) : ''
  }, [date])

  return (
    <Stack
      gap={{
        xs: 1,
        sm: 3,
      }}
    >
      <UHStack
        width="100%"
        justifyContent="space-between"
        mb={{
          xs: 1,
          sm: 0,
        }}
      >
        {/** Categories */}
        {categories && (
          <UHStack gap={2} flexWrap="wrap">
            {categories.map((category, index) => (
              <UButton
                key={index}
                variant="outlined"
                size="small"
                sx={{
                  padding: theme.spacing(0.5, 1),
                  minWidth: 'fit-content',
                  borderColor: theme.color.orange[900],
                  color: theme.color.orange[900],
                }}
              >
                {category.label}
              </UButton>
            ))}
          </UHStack>
        )}

        {/** 分享功能 (Mobile) */}
        {isMobile && (
          <UHStack gap={1}>
            <UIconButton variant="rounded" color="black" size="xs">
              <OutlinedShareIcon />
            </UIconButton>
            <UIconButton variant="rounded" color="black" size="xs">
              <BookmarkIcon />
            </UIconButton>
          </UHStack>
        )}
      </UHStack>

      {/** Title */}
      {title && (
        <Typography
          component="h1"
          variant="h3"
          fontWeight={500}
          sx={{ color: theme.color.grey[3100] }}
        >
          {title}
        </Typography>
      )}

      {/** Subtitle */}
      {subtitle && (
        <Typography
          variant="subtitleL"
          sx={{ color: theme.color.grey[3200] }}
          fontWeight={400}
        >
          {subtitle}
        </Typography>
      )}

      <Stack spacing={2}>
        {/** Date */}
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.grey[3300] }}
          fontWeight={500}
        >
          {t('page.releaseTimeAuthor', {
            ns: 'article',
            date: formattedDate,
            author: ArticleUtils.formatAuthorsName(authors ?? []),
          })}
        </Typography>
        {/** Tags */}
        {tags && (
          <UHStack gap={1}>
            {tags.map((tag, index) => (
              <ArticlePostTag key={index} tag={tag} />
            ))}
          </UHStack>
        )}
      </Stack>

      {/** Repost source from */}
      {repostSources && repostSources.length > 0 && (
        <Stack spacing={1}>
          <Typography
            variant="bodyS"
            fontWeight={500}
            sx={{ color: theme.color.grey[3400] }}
          >
            {'Repost source from'}
          </Typography>

          {/** Links */}
          {repostSources?.map((repostSource, index) => (
            <a href={repostSource.link} key={index} target="_blank">
              <Typography
                variant="bodyS"
                fontWeight={400}
                sx={{
                  color: theme.color.orange[900],
                  textDecoration: 'underline',
                }}
              >
                {repostSource.title}
              </Typography>
            </a>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default ArticlePostHeader
