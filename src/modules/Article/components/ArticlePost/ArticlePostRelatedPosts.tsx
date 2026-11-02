'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULinkText from '@/common/components/atoms/ULinkText'
import { Article } from '@/modules/Article/business/Article'
import { ScrollableArticlePostCards } from '@/modules/Article/components/ArticlePostCards'
import ArticlePostCard from '@/modules/Article/components/ArticlePostCard'
import { Stack, Typography, Grid2 as Grid } from '@mui/material'
import { memo } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

interface ArticlePostRelatedPostsProps {
  articles?: Array<Article>
}

const ArticlePostRelatedPosts = ({
  articles,
}: ArticlePostRelatedPostsProps) => {
  const { resolveRouteUrl } = useURouterClient()
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient(['article'])
  if (!articles || !articles.length) return null

  return (
    <Stack
      gap={{
        xs: 3,
        sm: 6,
      }}
      marginTop={{
        xs: 4,
        sm: 10,
      }}
      marginBottom={{
        xs: 12,
        sm: 16,
      }}
    >
      <UHStack gap={2} alignItems="center" justifyContent="space-between">
        <Typography variant="h2" fontWeight={600}>
          {t('page.section.relatedPosts.title', { ns: 'article' })}
        </Typography>
        <ULinkText link={resolveRouteUrl({ name: RouteName.Article })} />
      </UHStack>

      {isMobile ? (
        <FullWidthScrollableListWrapper>
          <ScrollableArticlePostCards articles={articles} forceCard />
        </FullWidthScrollableListWrapper>
      ) : (
        <Grid
          container
          rowSpacing={{
            xs: 0.75,
            sm: 8,
          }}
          columnSpacing={{
            xs: 0.75,
            sm: 4,
          }}
        >
          {articles.map((article) => (
            <Grid
              key={article.id}
              size={{
                xs: 12,
                sm: 4,
              }}
            >
              <ArticlePostCard article={article} showCategory forceCard />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  )
}

export default memo(ArticlePostRelatedPosts)
