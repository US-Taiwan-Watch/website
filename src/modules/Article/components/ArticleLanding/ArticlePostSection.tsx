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
import { isNull, isNumber } from 'lodash-es'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UInfiniteScrollButton from '@/common/components/atoms/UInfiniteScrollButton'

/** 每頁呈現的卡片數量 */
const ARTICLE_POST_COUNT = 9

interface ArticlePostSectionProps {
  defaultArticles?: Article[]
}

const ArticlePostSection = ({ defaultArticles }: ArticlePostSectionProps) => {
  const { isMobile } = useResponsive()
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
    if (!isNumber(data?.Articles?.totalPages)) return
    setTotalPages(data?.Articles?.totalPages ?? 1)
  }, [data?.Articles?.totalPages, setTotalPages])

  // 處理資料
  const isInfiniteScroll = useMemo(() => isMobile, [isMobile])
  const [articles, setArticles] = useState<Article[]>(defaultArticles ?? [])

  useEffect(() => {
    if (!data?.Articles?.docs) return

    const newArticles = data.Articles.docs
      .filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(lang, article))

    if (isInfiniteScroll) {
      setArticles((prev) => [
        ...(data?.Articles?.page === 1 ? [] : prev),
        ...newArticles,
      ])
    } else {
      setArticles(newArticles)
    }
  }, [data?.Articles?.docs, data?.Articles?.page, isInfiniteScroll, lang])

  useEffect(() => {
    getArticles({
      variables: queryVariables,
    })
  }, [queryVariables, getArticles])

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
      <Stack
        spacing={{
          xs: 4,
          sm: 8,
        }}
        alignItems="center"
        justifyContent="center"
      >
        {/** Tags */}
        <UHStack gap={2} flexWrap="wrap" width="100%">
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
        {loading && !articles.length ? (
          <ArticlePostCardsSkeleton count={10} />
        ) : (
          <>
            <ArticlePostCards articles={articles} />

            {/** Infinite Scroll (Mobile) */}
            {isInfiniteScroll && (
              <UInfiniteScrollButton
                loading={loading}
                onLoadMore={() => handlePageChange(page + 1)}
                hasMore={page < totalPages}
              />
            )}

            {/** Pagination (Desktop) */}
            {!isInfiniteScroll && !loading && totalPages > 1 && (
              <UPagination
                count={totalPages}
                page={page}
                onChange={(_, page) => {
                  setArticles([])
                  handlePageChange(page)
                }}
              />
            )}
          </>
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default ArticlePostSection
