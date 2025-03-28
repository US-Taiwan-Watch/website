import { Language } from '@/common/lib/i18n/types'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'
import { useParams } from 'next/navigation'
import { useMemo, useState, useEffect, useCallback } from 'react'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import { isEmpty, isNull, isNumber } from 'lodash-es'
import { useLazyQuery } from '@apollo/client'
import { usePagination } from '@/common/components/atoms/UPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

/** 每頁呈現的卡片數量 */
const ARTICLE_POST_COUNT = 9

export default function useArticleSearch(categoryId: string) {
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const highlightedCategories = useArticleStore.use.highlightedCategories()
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables = useMemo<ArticlesQueryVariables>(
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

  const [getArticles, { loading: isArticlesLoading, data }] = useLazyQuery<
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
  const [articles, setArticles] = useState<Article[]>([])

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
    isArticlesLoading,
    totalPages,
    page,
    totalDocs: data?.Articles?.totalDocs ?? 0,
    handlePageChange,
    isInfiniteScroll,
    resetArticles,
  }
}
