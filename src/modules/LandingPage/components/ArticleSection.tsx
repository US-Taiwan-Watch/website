'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useState, useMemo, useEffect } from 'react'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import { ROUTES } from '@/routes'
import CommonUtils from '@/modules/Common/Common.utils'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import { ArticleUtils } from '@/modules/Article/business/Article'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import {
  ArticlesQueryVariables,
  ArticlesQuery,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { useQuery } from '@apollo/client'

const ArticleSection = () => {
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
      .map((article) => ArticleUtils.parse(lang, article)) ?? []

  return (
    <>
      <ArticleStoreProvider />
      <LandingSectionWrapper
        contentWrapperSx={{
          paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
        }}
      >
        <SectionTitleWithLink title="Articles" link={ROUTES.ARTICLE} />
        <Stack gap={5}>
          <UHStack gap={2}>
            {landingTags.map((tag) => (
              <UCategoryChip
                key={tag.id}
                label={
                  tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''
                }
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
          {loading ? (
            <ArticlePostCardsSkeleton count={3} />
          ) : (
            <ArticlePostCards articles={articles} />
          )}
        </Stack>
      </LandingSectionWrapper>
    </>
  )
}

export default ArticleSection
