import { Language } from '@/common/lib/i18n/types'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { ArticleUtils } from '@/modules/Article/business/Article'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import { isEmpty, isNull } from 'lodash-es'
import { useQuery } from '@apollo/client'

export default function useArticleSearch(categoryId: string) {
  const { lang } = useParams<{ lang: Language }>()
  const highlightedCategories = useArticleStore.use.highlightedCategories()

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      where: {
        ...(!isEmpty(categoryId) && {
          categories: {
            equals: categoryId,
          },
        }),
      },
    }),
    [categoryId]
  )

  const { loading: isArticlesLoading, data } = useQuery<
    ArticlesQuery,
    ArticlesQueryVariables
  >(QUERY_ARTICLES, {
    variables: queryVariables,
  })
  const articles = useMemo(() => {
    if (!data?.Articles) return []
    return (
      data.Articles.docs
        ?.filter((article) => !isNull(article))
        .map((article) => ArticleUtils.parse(lang, article)) ?? []
    )
  }, [data, lang])

  const category = useMemo(
    () => highlightedCategories.find((category) => category.id === categoryId),
    [categoryId, highlightedCategories]
  )

  return {
    highlightedCategories,
    category,
    articles,
    isArticlesLoading,
  }
}
