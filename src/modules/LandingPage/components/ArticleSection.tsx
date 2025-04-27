'use client'

import { Stack, useTheme } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useState, useMemo, useEffect } from 'react'
import ArticlePostCards, {
  ScrollableArticlePostCards,
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import { ROUTES } from '@/routes'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import {
  ArticleUtils,
  ArticleType,
  Article,
} from '@/modules/Article/business/Article'
import {
  QUERY_ARTICLES,
  QUERY_KETAGALAN_ARTICLES,
} from '@/modules/Article/graphql/gql'
import {
  ArticlesQueryVariables,
  ArticlesQuery,
  KetagalanArticlesQuery,
  KetagalanArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { useLazyQuery } from '@apollo/client'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { USTWTheme } from '@/common/lib/mui/theme'

type ArticleSectionProps = {
  articleType: ArticleType
  defaultArticles?: Article[]
}

const ArticleSection = ({
  articleType,
  defaultArticles,
}: ArticleSectionProps) => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('home')
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const articleLandingTags = useArticleStore.use.articleLandingTags()
  const ketagalanLandingTags = useArticleStore.use.ketagalanLandingTags()
  const landingTags = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return ketagalanLandingTags
    }

    return articleLandingTags
  }, [articleType, articleLandingTags, ketagalanLandingTags])

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      limit: 3,
      sort: '-releaseTime',
      where: {
        ...(activeTagId && {
          tags: {
            equals: activeTagId ?? '',
          },
        }),
      },
    }),
    [activeTagId]
  )

  const [getArticles, { loading: isArticlesLoading, data: articlesQueryData }] =
    useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(QUERY_ARTICLES, {
      variables: queryVariables,
    })

  const [
    getKetagalanArticles,
    { loading: isKetagalanArticlesLoading, data: ketagalanQueryData },
  ] = useLazyQuery<KetagalanArticlesQuery, KetagalanArticlesQueryVariables>(
    QUERY_KETAGALAN_ARTICLES,
    {
      variables: queryVariables,
    }
  )

  useEffect(() => {
    if (articleType === ArticleType.Ketagalan) {
      getKetagalanArticles({
        variables: queryVariables,
      })
      return
    }

    getArticles({
      variables: queryVariables,
    })
  }, [getKetagalanArticles, queryVariables, articleType, getArticles])

  const articlesData = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return ketagalanQueryData?.KetagalanArticles
    }

    return articlesQueryData?.Articles
  }, [articleType, ketagalanQueryData, articlesQueryData])

  const loading = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return isKetagalanArticlesLoading
    }

    return isArticlesLoading
  }, [articleType, isKetagalanArticlesLoading, isArticlesLoading])

  const articles = useMemo(() => {
    return (
      articlesData?.docs
        ?.filter((article) => !isNull(article))
        .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
      defaultArticles ??
      []
    )
  }, [articlesData, lang, articleType, defaultArticles])

  return (
    <>
      <ArticleStoreProvider articleType={articleType} />
      <LandingSectionWrapper
        contentWrapperSx={{
          paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
        }}
        backgroundColor={
          articleType === ArticleType.Ketagalan
            ? theme.color.grey[1300]
            : undefined
        }
      >
        <SectionTitleWithLink
          title={t('section.articles.title')}
          renderTitle={
            articleType === ArticleType.Ketagalan
              ? () => <UKetagalanLogo />
              : undefined
          }
          link={
            articleType === ArticleType.Ketagalan
              ? ROUTES.KETAGALAN_MEDIA
              : ROUTES.ARTICLE
          }
        />
        <Stack gap={5}>
          <UHStack gap={2}>
            {landingTags.map((tag) => (
              <UCategoryChip
                key={tag.id}
                label={tag.name}
                active={activeTagId === tag.id}
                onClick={() => {
                  if (activeTagId === tag.id) {
                    setActiveTagId(undefined)
                  } else {
                    setActiveTagId(tag.id ?? undefined)
                  }
                }}
              />
            ))}
          </UHStack>

          {/** Posts */}
          {isMobile ? (
            loading ? (
              <ArticlePostCardsSkeleton count={1} forceCard />
            ) : (
              <FullWidthScrollableListWrapper>
                <ScrollableArticlePostCards articles={articles} forceCard />
              </FullWidthScrollableListWrapper>
            )
          ) : loading ? (
            <ArticlePostCardsSkeleton count={3} forceCard />
          ) : (
            <ArticlePostCards articles={articles} forceCard />
          )}
        </Stack>
      </LandingSectionWrapper>
    </>
  )
}

export default ArticleSection
