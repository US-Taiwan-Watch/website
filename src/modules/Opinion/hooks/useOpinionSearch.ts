import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import { isEmpty, isNull } from 'lodash-es'
import { useQuery } from '@apollo/client'

export default function useOpinionSearch(categoryId: string) {
  const { lang } = useParams<{ lang: Language }>()
  const highlightedCategories = useOpinionStore.use.highlightedCategories()

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

  const { loading: isOpinionsLoading, data } = useQuery<
    ArticlesQuery,
    ArticlesQueryVariables
  >(QUERY_ARTICLES, {
    variables: queryVariables,
  })
  const opinions = useMemo(() => {
    if (!data?.Articles) return []
    return (
      data.Articles.docs
        ?.filter((article) => !isNull(article))
        .map((article) => OpinionUtils.parse(lang, article)) ?? []
    )
  }, [data, lang])

  const category = useMemo(
    () => highlightedCategories.find((category) => category.id === categoryId),
    [categoryId, highlightedCategories]
  )

  return {
    highlightedCategories,
    category,
    opinions,
    isOpinionsLoading,
  }
}
