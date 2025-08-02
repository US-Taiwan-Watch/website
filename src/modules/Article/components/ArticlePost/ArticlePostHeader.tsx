'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Article,
  ArticleType,
  ArticleUtils,
} from '@/modules/Article/business/Article'
import ArticlePostTag from '@/modules/Article/components/ArticlePost/ArticlePostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  OutlinedShareIcon,
} from '@/common/styles/assets/Icons'
import UIconButton from '@/common/components/atoms/UIconButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import Link from 'next/link'
import { DateUtils } from '@/modules/Common/business/Date'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'

const DATE_FORMAT = 'YYYY-MM-DD'
interface ArticlePostHeaderProps {
  article: Article
}

const ArticlePostHeader = function ArticlePostHeader({
  article,
}: ArticlePostHeaderProps) {
  const { bookmarkArticle } = useAccount()
  const account = useAccountStore.use.account()
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['article'])
  const { categories, title, subtitle, date, tags, repostSources, authors } =
    article
  const theme = useTheme<USTWTheme>()
  const isBookmarked = useMemo(() => {
    if (article.type === ArticleType.Article) {
      return account?.bookmarkUstwArticles.some(
        (bookmark) => bookmark.id === article.id
      )
    } else if (article.type === ArticleType.Ketagalan) {
      return account?.bookmarkKetagalanArticles.some(
        (bookmark) => bookmark.id === article.id
      )
    }
  }, [article.type, account])

  const [formattedDate, setFormattedDate] = useState('')
  useEffect(() => {
    setFormattedDate(DateUtils.formatLocal(date, DATE_FORMAT))
  }, [date])

  return (
    <Stack
      gap={{
        xs: 1,
        sm: 1.5,
        md: 3,
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
                  borderColor: theme.color.article.postCategoryText,
                  color: theme.color.article.postCategoryText,
                }}
              >
                {category.label}
              </UButton>
            ))}
          </UHStack>
        )}

        {/** 功能 (Mobile) */}
        {isMobile && (
          <UHStack gap={1}>
            {/** 分享功能 */}
            <UIconButton variant="rounded" color="black" size="xs">
              <OutlinedShareIcon />
            </UIconButton>
            {/** 收藏功能 */}
            <UIconButton
              variant="rounded"
              color="black"
              size="xs"
              onClick={() => bookmarkArticle(article)}
            >
              {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
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
          sx={{ color: theme.color.article.postTitle }}
        >
          {title}
        </Typography>
      )}

      {/** Subtitle */}
      {subtitle && (
        <Typography
          variant="subtitleL"
          sx={{ color: theme.color.article.postSubtitle }}
          fontWeight={400}
        >
          {subtitle}
        </Typography>
      )}

      <Stack spacing={2}>
        {/** Date */}
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.article.postSectionTitle }}
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
            sx={{ color: theme.color.article.postSectionTitle }}
          >
            {t('page.repostFrom', { ns: 'article' })}
          </Typography>

          {/** Links */}
          {repostSources?.map((repostSource, index) => (
            <Link
              href={repostSource.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="bodyS"
                fontWeight={400}
                sx={{
                  color: theme.color.article.postSource,
                  textDecoration: 'underline',
                }}
              >
                {repostSource.title}
              </Typography>
            </Link>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default ArticlePostHeader
