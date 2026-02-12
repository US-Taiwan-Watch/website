'use client'

import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  OutlinedShareIcon,
} from '@/common/styles/assets/Icons'
import { CircularProgress, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { Article } from '@/modules/Article/business/Article'
import { memo, useCallback, useEffect, useState } from 'react'
import { useToast } from '@/common/providers/ToastProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type ArticleFixedProps = {
  article: Article
}

const ArticleFixed = memo(function ArticleFixed({
  article,
}: ArticleFixedProps) {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const {
    bookmarkArticle,
    unbookmarkArticle,
    isMutating,
    checkIfArticleIsBookmarked,
    isAccountLoading,
  } = useAccount()
  const [isBookmarked, setIsBookmarked] = useState(false)
  useEffect(() => {
    setIsBookmarked(checkIfArticleIsBookmarked(article))
  }, [checkIfArticleIsBookmarked, article])

  const handleBookmarkClick = useCallback(async () => {
    if (isBookmarked) {
      setIsBookmarked(false)
      await unbookmarkArticle(article)
      return
    }
    setIsBookmarked(true)
    await bookmarkArticle(article)
  }, [isBookmarked, bookmarkArticle, unbookmarkArticle, article])

  const { toast } = useToast()
  const { t } = useTranslationClient('article')
  const handleShareClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast('success', t('bookmark.copied.msg', { ns: 'article' }))
    } catch {
      toast('error', t('bookmark.copied.error.msg', { ns: 'article' }))
    }
  }, [t, toast])

  if (isMobile) return null

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        top: {
          xs: 250,
          lg: 450,
        },
        bottom: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Stack
        spacing={1}
        padding={1.5}
        sx={{
          position: 'absolute',
          bottom: 0,
          right: theme.spacing(3),
          backgroundColor: theme.color.article.postFixedToolBackground,
          borderRadius: '30px',
          border: `1px solid ${theme.color.article.postFixedToolBorder}`,
        }}
      >
        <UIconButton
          variant="rounded"
          color="inherit"
          sx={{
            backgroundColor: theme.color.article.postFixedToolButton,
            color: theme.color.article.postFixedToolButtonText,
            '&:hover': {
              backgroundColor: theme.color.article.postFixedToolButtonHover,
            },
          }}
          onClick={handleBookmarkClick}
          disabled={isMutating || isAccountLoading}
        >
          {isAccountLoading ? (
            <CircularProgress color="inherit" size={16} />
          ) : isBookmarked ? (
            <BookmarkFilledIcon />
          ) : (
            <BookmarkIcon />
          )}
        </UIconButton>
        <UIconButton
          variant="rounded"
          color="inherit"
          sx={{
            backgroundColor: theme.color.article.postFixedToolButton,
            color: theme.color.article.postFixedToolButtonText,
            '&:hover': {
              backgroundColor: theme.color.article.postFixedToolButtonHover,
            },
          }}
          onClick={handleShareClick}
        >
          <OutlinedShareIcon />
        </UIconButton>
      </Stack>
    </Container>
  )
})

export default ArticleFixed
