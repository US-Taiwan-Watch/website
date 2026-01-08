import { Language } from '@/common/lib/i18n/types'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import {
  Article,
  ArticleType,
  ArticleUtils,
} from '@/modules/Article/business/Article'
import { useParams } from 'next/navigation'
import { useMemo, useState, useEffect, useCallback } from 'react'
import {
  UstwArticlesQuery,
  UstwArticlesQueryVariables,
  KetagalanArticlesQuery,
  KetagalanArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import {
  QUERY_USTW_ARTICLES,
  QUERY_KETAGALAN_ARTICLES,
} from '@/modules/Article/graphql/gql'
import { isEmpty, isNull, isNumber } from 'lodash-es'
import { useLazyQuery } from '@apollo/client/react'
import { usePagination } from '@/common/components/atoms/UPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

/** 每頁呈現的卡片數量 */
const ARTICLE_POST_COUNT = 9

export default function useArticleSearch(
  articleType: ArticleType,
  categoryId: string
) {
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const articleHighlightedCategories =
    useArticleStore.use.articleHighlightedCategories()
  const ketagalanHighlightedCategories =
    useArticleStore.use.ketagalanHighlightedCategories()
  const highlightedCategories = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return ketagalanHighlightedCategories
    }

    return articleHighlightedCategories
  }, [
    articleType,
    articleHighlightedCategories,
    ketagalanHighlightedCategories,
  ])
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables = useMemo<
    UstwArticlesQueryVariables | KetagalanArticlesQueryVariables
  >(
    () => ({
      limit: ARTICLE_POST_COUNT,
      page,
      where: {
        ...(!isEmpty(categoryId) && {
          categories: {
            equals: categoryId,
          },
        }),
      },
    }),
    [categoryId, page]
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
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    if (!articlesData?.docs) return

    try {
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
    } catch (error) {
      console.error('Failed to parse articles in useArticleSearch:', error)
      // Keep previous articles on error, don't clear the state
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

  const category = useMemo(
    () => highlightedCategories.find((category) => category.id === categoryId),
    [categoryId, highlightedCategories]
  )

  const resetArticles = useCallback(() => {
    setArticles([])
  }, [])

  return {
    highlightedCategories,
    category,
    articles,
    isArticlesLoading: loading,
    totalPages,
    page,
    totalDocs: articlesData?.totalDocs ?? 0,
    handlePageChange,
    shouldAppendData,
    resetArticles,
  }
}
