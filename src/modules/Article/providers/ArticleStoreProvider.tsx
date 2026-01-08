'use client'

import { Language } from '@/common/lib/i18n/types'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { useParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import {
  CategoriesArticlesQuery,
  CategoriesArticlesQueryVariables,
  CategoriesKetagalansQuery,
  CategoriesKetagalansQueryVariables,
  TagsQuery,
  TagsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_TAGS } from '@/modules/Common/graphql/gql'
import { useLazyQuery } from '@apollo/client/react'
import { isNull } from 'lodash-es'
import {
  QUERY_CATEGORIES_ARTICLES,
  QUERY_CATEGORIES_KETAGALANS,
} from '@/modules/Article/graphql/gql'
import { ArticleCategoryUtils } from '@/modules/Article/business/ArticleCategory'
import TagUtils from '@/modules/Common/business/Tag'
import { ArticleType } from '@/modules/Article/business/Article'

type ArticleStoreProviderProps = {
  articleType: ArticleType
}

export default function ArticleStoreProvider({
  articleType,
}: ArticleStoreProviderProps) {
  const { lang } = useParams<{ lang: Language }>()

  const setArticleLandingTags = useArticleStore(
    (state) => state.setArticleLandingTags
  )
  const setArticleHighlightedCategories = useArticleStore(
    (state) => state.setArticleHighlightedCategories
  )
  const setKetagalanLandingTags = useArticleStore(
    (state) => state.setKetagalanLandingTags
  )
  const setKetagalanHighlightedCategories = useArticleStore(
    (state) => state.setKetagalanHighlightedCategories
  )

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

  const [
    getArticleLandingTags,
    { data: articleLandingTagsData, error: articleLandingTagsError },
  ] = useLazyQuery<TagsQuery, TagsQueryVariables>(QUERY_TAGS)

  const [
    getKetagalanLandingTags,
    { data: ketagalanLandingTagsData, error: ketagalanLandingTagsError },
  ] = useLazyQuery<TagsQuery, TagsQueryVariables>(QUERY_TAGS)

  const landingTagsData = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return ketagalanLandingTagsData
    }

    return articleLandingTagsData
  }, [articleType, articleLandingTagsData, ketagalanLandingTagsData])

  useEffect(() => {
    if (articleType === ArticleType.Ketagalan) {
      getKetagalanLandingTags({
        variables: landingTagsVariables,
      })
      return
    }

    getArticleLandingTags({
      variables: landingTagsVariables,
    })
  }, [
    getKetagalanLandingTags,
    landingTagsVariables,
    articleType,
    getArticleLandingTags,
  ])

  useEffect(() => {
    if (articleType === ArticleType.Ketagalan && ketagalanLandingTagsError) {
      console.error(
        'Failed to fetch ketagalan landing tags:',
        ketagalanLandingTagsError
      )
    }
    if (articleType === ArticleType.Article && articleLandingTagsError) {
      console.error(
        'Failed to fetch article landing tags:',
        articleLandingTagsError
      )
    }
  }, [articleType, articleLandingTagsError, ketagalanLandingTagsError])

  useEffect(() => {
    if (!landingTagsData) return

    try {
      if (articleType === ArticleType.Ketagalan) {
        setKetagalanLandingTags(
          (landingTagsData?.Tags?.docs ?? [])
            .filter((tag) => !isNull(tag))
            .map((tag) => TagUtils.parse(lang, tag))
        )
        return
      }

      setArticleLandingTags(
        (landingTagsData?.Tags?.docs ?? [])
          .filter((tag) => !isNull(tag))
          .map((tag) => TagUtils.parse(lang, tag))
      )
    } catch (error) {
      console.error('Failed to parse landing tags:', error)
    }
  }, [
    landingTagsData,
    setArticleLandingTags,
    lang,
    articleType,
    setKetagalanLandingTags,
  ])

  const highlightedArticlesCategoriesVariables =
    useMemo<CategoriesArticlesQueryVariables>(() => ({}), [])

  const [
    getHighlightedCategories,
    { data: categoriesArticlesQueryData, error: categoriesArticlesError },
  ] = useLazyQuery<CategoriesArticlesQuery, CategoriesArticlesQueryVariables>(
    QUERY_CATEGORIES_ARTICLES
  )

  const highlightedKetagalanCategoriesVariables =
    useMemo<CategoriesKetagalansQueryVariables>(() => ({}), [])

  const [
    getKetagalanHighlightedCategories,
    { data: categoriesKetagalansQueryData, error: categoriesKetagalansError },
  ] = useLazyQuery<
    CategoriesKetagalansQuery,
    CategoriesKetagalansQueryVariables
  >(QUERY_CATEGORIES_KETAGALANS)

  const highlightedCategoriesData = useMemo(() => {
    if (articleType === ArticleType.Ketagalan) {
      return categoriesKetagalansQueryData?.CategoriesKetagalans
    }

    return categoriesArticlesQueryData?.CategoriesArticles
  }, [articleType, categoriesArticlesQueryData, categoriesKetagalansQueryData])

  useEffect(() => {
    if (articleType === ArticleType.Ketagalan) {
      getKetagalanHighlightedCategories({
        variables: highlightedKetagalanCategoriesVariables,
      })
      return
    }

    getHighlightedCategories({
      variables: highlightedArticlesCategoriesVariables,
    })
  }, [
    articleType,
    getHighlightedCategories,
    getKetagalanHighlightedCategories,
    highlightedArticlesCategoriesVariables,
    highlightedKetagalanCategoriesVariables,
  ])

  useEffect(() => {
    if (articleType === ArticleType.Ketagalan && categoriesKetagalansError) {
      console.error(
        'Failed to fetch ketagalan categories:',
        categoriesKetagalansError
      )
    }
    if (articleType === ArticleType.Article && categoriesArticlesError) {
      console.error(
        'Failed to fetch article categories:',
        categoriesArticlesError
      )
    }
  }, [articleType, categoriesArticlesError, categoriesKetagalansError])

  useEffect(() => {
    if (!highlightedCategoriesData) return

    try {
      if (articleType === ArticleType.Ketagalan) {
        setKetagalanHighlightedCategories(
          (highlightedCategoriesData.docs ?? [])
            .filter((category) => !isNull(category))
            .map((category) => ArticleCategoryUtils.parse(lang, category))
        )
        return
      }

      setArticleHighlightedCategories(
        (highlightedCategoriesData.docs ?? [])
          .filter((category) => !isNull(category))
          .map((category) => ArticleCategoryUtils.parse(lang, category))
      )
    } catch (error) {
      console.error('Failed to parse highlighted categories:', error)
    }
  }, [
    highlightedCategoriesData,
    setArticleHighlightedCategories,
    lang,
    articleType,
    setKetagalanHighlightedCategories,
  ])

  return null
}
