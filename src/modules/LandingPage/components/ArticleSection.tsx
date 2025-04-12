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
import { ArticleUtils, ArticleType } from '@/modules/Article/business/Article'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import {
  ArticlesQueryVariables,
  ArticlesQuery,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { useQuery } from '@apollo/client'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { USTWTheme } from '@/common/lib/mui/theme'

type ArticleSectionProps = {
  articleType: ArticleType
}

const ArticleSection = ({ articleType }: ArticleSectionProps) => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('home')
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const landingTags = useArticleStore.use.landingTags()

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

  // TODO: 不同文章類型，使用不同的 query
  const { loading, data, refetch } = useQuery<
    ArticlesQuery,
    ArticlesQueryVariables
  >(QUERY_ARTICLES, {
    variables: queryVariables,
  })

  useEffect(() => {
    refetch(queryVariables)
  }, [queryVariables, refetch])

  const articles =
    data?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(lang, article, articleType)) ?? []

  return (
    <>
      <ArticleStoreProvider />
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
          renderTitle={() =>
            articleType === ArticleType.Ketagalan ? (
              <UKetagalanLogo />
            ) : (
              t('section.articles.title')
            )
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
