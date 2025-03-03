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
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useLazyQuery } from '@apollo/client'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { isNull } from 'lodash-es'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'

/** 每頁呈現的卡片數量 */
const ARTICLE_POST_COUNT = 9

interface ArticlePostSectionProps {
  defaultArticles?: Article[]
}

const ArticlePostSection = ({ defaultArticles }: ArticlePostSectionProps) => {
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const landingTags = useArticleStore.use.landingTags()
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      limit: ARTICLE_POST_COUNT,
      page,
      where: {
        ...(activeTagId && {
          tags: {
            equals: activeTagId ?? '',
          },
        }),
      },
    }),
    [activeTagId, page]
  )

  const [getArticles, { loading, data }] = useLazyQuery<
    ArticlesQuery,
    ArticlesQueryVariables
  >(QUERY_ARTICLES, {
    variables: queryVariables,
  })

  useEffect(() => {
    setTotalPages(data?.Articles?.totalPages ?? 1)
  }, [data?.Articles?.totalPages, setTotalPages])

  useEffect(() => {
    getArticles({
      variables: queryVariables,
    })
  }, [queryVariables, getArticles])

  const articles = useMemo(() => {
    const apiArticles =
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) => ArticleUtils.parse(lang, article)) ?? []

    if (apiArticles.length > 0) {
      return apiArticles
    }

    return defaultArticles ?? []
  }, [data?.Articles?.docs, defaultArticles, lang])

  return (
    <LandingSectionWrapper
      containerSx={{
        flex: 1,
      }}
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
                label={tag.name}
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
          <>
            <ArticlePostCards articles={articles} />
            {/** Pagination */}
            {totalPages > 1 && (
              <Box display="flex" alignItems="center" justifyContent="center">
                <UPagination
                  count={totalPages}
                  page={page}
                  onChange={(_, page) => {
                    handlePageChange(page)
                  }}
                />
              </Box>
            )}
          </>
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default ArticlePostSection
