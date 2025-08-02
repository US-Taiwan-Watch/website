'use client'

import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  OutlinedShareIcon,
} from '@/common/styles/assets/Icons'
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { Article, ArticleType } from '@/modules/Article/business/Article'
import { memo, useMemo } from 'react'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'

type ArticleFixedProps = {
  article: Article
}

const ArticleFixed = memo(function ArticleFixed({
  article,
}: ArticleFixedProps) {
  const account = useAccountStore.use.account()
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const { bookmarkArticle } = useAccount()
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
          onClick={() => bookmarkArticle(article)}
        >
          {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
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
        >
          <OutlinedShareIcon />
        </UIconButton>
      </Stack>
    </Container>
  )
})

export default ArticleFixed
