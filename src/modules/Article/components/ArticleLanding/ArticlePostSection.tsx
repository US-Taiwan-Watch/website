'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import {
  UstwArticlesQuery,
  UstwArticlesQueryVariables,
  KetagalanArticlesQuery,
  KetagalanArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Article,
  ArticleUtils,
  ArticleType,
} from '@/modules/Article/business/Article'
import ArticlePostCards, {
  ArticlePostCardsSkeleton,
} from '@/modules/Article/components/ArticlePostCards'
import {
  QUERY_USTW_ARTICLES,
  QUERY_KETAGALAN_ARTICLES,
} from '@/modules/Article/graphql/gql'
import { useLazyQuery } from '@apollo/client/react'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { isNull, isNumber } from 'lodash-es'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import ULoadMoreButton from '@/common/components/atoms/ULoadMoreButton'
import { Tag } from '@/modules/Common/business/Tag'

/** 每頁呈現的卡片數量 */
const ARTICLE_POST_COUNT = 9

interface ArticlePostSectionProps {
  articleType: ArticleType
  defaultArticles?: Article[]
  tags: Tag[]
}

const ArticlePostSection = ({
  articleType,
  defaultArticles,
  tags,
}: ArticlePostSectionProps) => {
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables = useMemo<UstwArticlesQueryVariables>(
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

  const [getArticles, { loading: isArticlesLoading, data: articlesQueryData }] =
    useLazyQuery<UstwArticlesQuery, UstwArticlesQueryVariables>(
      QUERY_USTW_ARTICLES
    )

  const [
    getKetagalanArticles,
    { loading: isKetagalanArticlesLoading, data: ketagalanQueryData },
  ] = useLazyQuery<KetagalanArticlesQuery, KetagalanArticlesQueryVariables>(
    QUERY_KETAGALAN_ARTICLES
  )

  const articlesData = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return ketagalanQueryData?.KetagalanArticles
    }

    return articlesQueryData?.UstwArticles
  }, [articleType, ketagalanQueryData, articlesQueryData])

  const loading = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return isKetagalanArticlesLoading
    }

    return isArticlesLoading
  }, [articleType, isKetagalanArticlesLoading, isArticlesLoading])

  useEffect(() => {
    if (!isNumber(articlesData?.totalPages)) return
    setTotalPages(articlesData?.totalPages ?? 1)
  }, [articlesData, setTotalPages])

  // 處理資料
  const shouldAppendData = useMemo(() => isMobile, [isMobile])
  const [articles, setArticles] = useState<Article[]>(defaultArticles ?? [])

  useEffect(() => {
    if (!articlesData?.docs) return

    const newArticles = articlesData.docs
      .filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(lang, article, articleType))

    if (shouldAppendData) {
      setArticles((prev) => {
        const existingIds = new Set(prev.map((article) => article.id))
        const deduplicatedNewArticles = newArticles.filter(
          (article) => !existingIds.has(article.id)
        )
        return [
          ...(articlesData?.page === 1 ? [] : prev),
          ...deduplicatedNewArticles,
        ]
      })
    } else {
      setArticles(newArticles)
    }
  }, [articleType, articlesData, shouldAppendData, lang])

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
  }, [queryVariables, getArticles, getKetagalanArticles, articleType])

  return (
    <LandingSectionWrapper
      containerSx={{
        flex: 1,
      }}
      backgroundColor={theme.color.article.contentPageBackground}
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
          {tags.map((tag) => {
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
            {shouldAppendData && (
              <ULoadMoreButton
                loading={loading}
                onLoadMore={() => handlePageChange(page + 1)}
                hasMore={page < totalPages}
              />
            )}

            {/** Pagination (Desktop) */}
            {!shouldAppendData && !loading && totalPages > 1 && (
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
