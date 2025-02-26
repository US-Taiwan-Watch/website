'use client'

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
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
import { QUERY_CATEGORIES_ARTICLES } from '@/modules/Opinion/graphql/gql'
import { OpinionCategoryUtils } from '@/modules/Opinion/business/OpinionCategory'

export default function OpinionStoreProvider() {
  const { lang } = useParams<{ lang: Language }>()

  const setLandingTags = useOpinionStore((state) => state.setLandingTags)
  const setHomeHighlightedCategories =
    useOpinionStore.use.setHomeHighlightedCategories()

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
      (landingTagsData?.Tags?.docs ?? []).filter((tag) => !isNull(tag))
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
        .map((category) => OpinionCategoryUtils.parse(lang, category))
    )
  }, [highlightedCategoriesData, setHomeHighlightedCategories, lang])

  return null
}
