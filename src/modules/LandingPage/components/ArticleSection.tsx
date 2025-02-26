'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { useState, useMemo, useEffect } from 'react'
import OpinionPostCards, {
  OpinionPostCardsSkeleton,
} from '@/modules/Opinion/components/OpinionPostCards'
import { ROUTES } from '@/routes'
import CommonUtils from '@/modules/Common/Common.utils'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import OpinionStoreProvider from '@/modules/Opinion/providers/OpinionStoreProvider'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import { QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import {
  ArticlesQueryVariables,
  ArticlesQuery,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { useQuery } from '@apollo/client'

const ArticleSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()
  const landingTags = useOpinionStore.use.landingTags()

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      limit: 3,
      where: {
        categories: {
          equals: activeCategoryId ?? '',
        },
      },
    }),
    [activeCategoryId]
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

  const articles = data?.Articles
  const opinions =
    articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => OpinionUtils.parse(lang, article)) ?? []

  return (
    <>
      <OpinionStoreProvider />
      <LandingSectionWrapper
        contentWrapperSx={{
          paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
        }}
      >
        <SectionTitleWithLink title="Articles" link={ROUTES.OPINION} />
        <Stack gap={5}>
          <UHStack gap={2}>
            {landingTags.map((tag) => (
              <UCategoryChip
                key={tag.id}
                label={
                  tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''
                }
                active={activeCategoryId === tag.id}
                onClick={() => {
                  if (activeCategoryId === tag.id) {
                    setActiveCategoryId(undefined)
                  } else {
                    setActiveCategoryId(tag.id ?? undefined)
                  }
                }}
              />
            ))}
          </UHStack>

          {/** Posts */}
          {loading ? (
            <OpinionPostCardsSkeleton count={3} />
          ) : (
            <OpinionPostCards opinions={opinions} pagination={false} />
          )}
        </Stack>
      </LandingSectionWrapper>
    </>
  )
}

export default ArticleSection
