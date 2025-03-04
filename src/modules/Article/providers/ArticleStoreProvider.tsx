'use client'

import { Language } from '@/common/lib/i18n/types'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import {
  CategoriesArticlesQuery,
  CategoriesArticlesQueryVariables,
  TagsQuery,
  TagsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_TAGS } from '@/modules/Common/graphql/gql'
import { useQuery } from '@apollo/client'
import { isNull } from 'lodash-es'
import { QUERY_CATEGORIES_ARTICLES } from '@/modules/Article/graphql/gql'
import { ArticleCategoryUtils } from '@/modules/Article/business/ArticleCategory'
import TagUtils from '@/modules/Common/business/Tag'

export default function ArticleStoreProvider() {
  const { lang } = useParams<{ lang: Language }>()

  const setLandingTags = useArticleStore((state) => state.setLandingTags)
  const setHomeHighlightedCategories =
    useArticleStore.use.setHomeHighlightedCategories()

  const landingTagsVariables = useMemo<TagsQueryVariables>(
    () => ({
      where: {
        isFeatured: {
          equals: true,
        },
      },
    }),
    []
  )

  const { data: landingTagsData } = useQuery<TagsQuery, TagsQueryVariables>(
    QUERY_TAGS,
    {
      variables: landingTagsVariables,
    }
  )

  useEffect(() => {
    if (!landingTagsData) return
    setLandingTags(
      (landingTagsData?.Tags?.docs ?? [])
        .filter((tag) => !isNull(tag))
        .map((tag) => TagUtils.parse(lang, tag))
    )
  }, [landingTagsData, setLandingTags, lang])

  const highlightedCategoriesVariables =
    useMemo<CategoriesArticlesQueryVariables>(() => ({}), [])

  const { data: highlightedCategoriesData } = useQuery<
    CategoriesArticlesQuery,
    CategoriesArticlesQueryVariables
  >(QUERY_CATEGORIES_ARTICLES, {
    variables: highlightedCategoriesVariables,
  })

  useEffect(() => {
    if (!highlightedCategoriesData) return
    setHomeHighlightedCategories(
      (highlightedCategoriesData?.CategoriesArticles?.docs ?? [])
        .filter((category) => !isNull(category))
        .map((category) => ArticleCategoryUtils.parse(lang, category))
    )
  }, [highlightedCategoriesData, setHomeHighlightedCategories, lang])

  return null
}
