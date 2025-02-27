'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { USTWTheme } from '@/common/lib/mui/theme'
import CommonUtils from '@/modules/Common/Common.utils'
import { ArticleUtils } from '@/modules/Article/business/Article'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useQuery } from '@apollo/client'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { isNull } from 'lodash-es'
import { useParams } from 'next/navigation'
import { useMemo, useState } from 'react'

const ArticlePostSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const landingTags = useArticleStore.use.landingTags()

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      limit: 10,
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

  const { loading, data } = useQuery<ArticlesQuery, ArticlesQueryVariables>(
    QUERY_ARTICLES,
    {
      variables: queryVariables,
    }
  )

  const articles =
    data?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(lang, article)) ?? []

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[100]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack spacing={8}>
        {/** Tags */}
        <UHStack gap={2} flexWrap="wrap">
          {landingTags.map((tag) => {
            const isActive = activeTagId === tag.id

            return (
              <UCategoryChip
                key={tag.id}
                label={
                  tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''
                }
                active={isActive}
                onClick={() => {
                  if (isActive) {
                    setActiveTagId(undefined)
                  } else {
                    setActiveTagId(tag.id ?? undefined)
                  }
                }}
              />
            )
          })}
        </UHStack>

        {/** Posts */}
        {loading ? (
          <ArticlePostCardsSkeleton count={10} />
        ) : (
          <ArticlePostCards articles={articles} />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default ArticlePostSection
