import {
  UstwArticleQuery,
  UstwArticleQueryVariables,
  UstwArticlesQuery,
  UstwArticlesQueryVariables,
  KetagalanArticleQuery,
  KetagalanArticleQueryVariables,
  KetagalanArticlesQuery,
  KetagalanArticlesQueryVariables,
  KetagalanArticleIdsQuery,
  UstwArticleIdsQuery,
  UstwArticleIdsQueryVariables,
  KetagalanArticleIdsQueryVariables,
  CategoriesArticlesQuery,
  CategoriesArticlesQueryVariables,
  CategoriesKetagalansQuery,
  CategoriesKetagalansQueryVariables,
  TagsQuery,
  TagsQueryVariables,
  CategoriesKetagalanQuery,
  CategoriesKetagalanQueryVariables,
  CategoriesArticleQuery,
  CategoriesArticleQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { getClient } from '@/common/lib/graphql/ServerApolloClient'
import { FetchOptions } from '@/common/lib/graphql/revalidate'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import {
  QUERY_USTW_ARTICLE,
  QUERY_USTW_ARTICLES,
  QUERY_KETAGALAN_ARTICLE,
  QUERY_KETAGALAN_ARTICLES,
  QUERY_KETAGALAN_ARTICLE_IDS,
  QUERY_USTW_ARTICLE_IDS,
  QUERY_CATEGORIES_ARTICLES,
  QUERY_CATEGORIES_KETAGALANS,
  QUERY_CATEGORIES_KETAGALAN,
  QUERY_CATEGORIES_ARTICLE,
} from '@/modules/Article/graphql/gql'
import { isNull, isUndefined } from 'lodash-es'
import { Language } from '@/common/lib/i18n/types'
import { QUERY_TAGS } from '@/modules/Common/graphql/gql'
import TagUtils from '@/modules/Common/business/Tag'
import { ArticleCategoryUtils } from '@/modules/Article/business/ArticleCategory'

const MAX_CATEGORIES_COUNT = 2147483647 // 2^31 - 1

/**
 * Article API
 *
 * @description Article 的 RSC 端 API 實作
 */
export default class ServerArticleApi {
  /**
   * 取得文章 IDs 和更新時間
   * @param articleType 文章類型
   * @returns 文章 IDs 和 updatedAt 列表
   */
  static async getArticleIds({
    articleType,
  }: {
    articleType: ArticleType
  }): Promise<{ id: string; updatedAt: string }[]> {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticleIdsQuery,
          KetagalanArticleIdsQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLE_IDS,
          context: FetchOptions.stable,
        })

        return (
          (data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .filter(
              (article) => !isNull(article.id) && !isUndefined(article.id)
            ) as { id: string; updatedAt: string }[]) ?? []
        )
      }

      const { data } = await client.query<
        UstwArticleIdsQuery,
        UstwArticleIdsQueryVariables
      >({
        query: QUERY_USTW_ARTICLE_IDS,
        context: FetchOptions.stable,
      })

      return (
        (data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ({
            id: article!.id,
            updatedAt: article!.updatedAt,
          }))
          .filter(
            (article) => !isNull(article.id) && !isUndefined(article.id)
          ) as { id: string; updatedAt: string }[]) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch article:', error)
      return []
    }
  }

  /**
   * 取得首頁精選文章
   * @param lang 語言
   * @returns 首頁精選文章列表
   */
  static async getHomeFeaturedArticles(
    lang: Language,
    {
      limit = 3,
      articleType,
    }: {
      limit?: number
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit,
          },
          context: FetchOptions.realTime,
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
          []
        )
      }

      const { data } = await client.query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit,
        },
        context: FetchOptions.realTime,
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
        []
      )
    } catch (error) {
      console.error('Failed to fetch home featured articles:', error)
      return []
    }
  }

  /**
   * 取得首頁文章
   * @param lang 語言
   * @returns 首頁文章列表
   */
  static async getHomeArticles(
    lang: Language,
    {
      limit = 3,
      articleType,
    }: {
      limit?: number
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit,
            sort: '-releaseTime',
          },
          context: FetchOptions.realTime,
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
          []
        )
      }

      const { data } = await client.query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit,
        },
        context: FetchOptions.realTime,
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
        []
      )
    } catch (error) {
      console.error('Failed to fetch home articles:', error)
      return []
    }
  }

  /**
   * 取得首頁文章標籤
   * @param lang 語言
   * @returns 首頁文章標籤列表
   */
  static async getLandingArticleTags(lang: Language) {
    try {
      const client = getClient()

      const { data } = await client.query<TagsQuery, TagsQueryVariables>({
        query: QUERY_TAGS,
        variables: {
          where: {
            isFeatured: {
              equals: true,
            },
          },
        },
        context: FetchOptions.realTime,
      })

      return (data?.Tags?.docs ?? [])
        .filter((tag) => !isNull(tag))
        .map((tag) => TagUtils.parse(lang, tag))
    } catch (error) {
      console.error('Failed to fetch landing article tags:', error)
      return []
    }
  }

  /**
   * 取得文章首頁文章
   * @param lang 語言
   * @param limit 限制數量
   * @returns 首頁文章列表
   */
  static async getLandingArticles(
    lang: Language,
    {
      limit = 4,
      articleType,
    }: {
      limit?: number
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit,
            where: {
              isFeatured: {
                equals: true,
              },
            },
          },
          context: FetchOptions.realTime,
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
          []
        )
      }

      const { data } = await client.query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit,
          where: {
            isFeatured: {
              equals: true,
            },
          },
        },
        context: FetchOptions.realTime,
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
        []
      )
    } catch (error) {
      console.error('Failed to fetch landing articles:', error)
      return []
    }
  }

  /**
   * 取得 Categories
   * @param lang 語言
   * @param articleType 文章類型
   * @returns Categories
   */
  static async getCategories(lang: Language, articleType: ArticleType) {
    try {
      const client = getClient()

      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          CategoriesKetagalansQuery,
          CategoriesKetagalansQueryVariables
        >({
          query: QUERY_CATEGORIES_KETAGALANS,
          context: FetchOptions.realTime,
          variables: {
            limit: MAX_CATEGORIES_COUNT,
          },
        })

        return (data?.CategoriesKetagalans?.docs ?? [])
          .filter((category) => !isNull(category))
          .map((category) => ArticleCategoryUtils.parse(lang, category))
      }

      const { data } = await client.query<
        CategoriesArticlesQuery,
        CategoriesArticlesQueryVariables
      >({
        query: QUERY_CATEGORIES_ARTICLES,
        context: FetchOptions.realTime,
        variables: {
          limit: MAX_CATEGORIES_COUNT,
        },
      })

      return (data?.CategoriesArticles?.docs ?? [])
        .filter((category) => !isNull(category))
        .map((category) => ArticleCategoryUtils.parse(lang, category))
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      return []
    }
  }

  /**
   * 取得 Category
   * @param lang 語言
   * @param articleType 文章類型
   * @returns Category
   */
  static async getCategory(
    lang: Language,
    articleType: ArticleType,
    categoryId: string
  ) {
    try {
      const client = getClient()

      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          CategoriesKetagalanQuery,
          CategoriesKetagalanQueryVariables
        >({
          query: QUERY_CATEGORIES_KETAGALAN,
          variables: {
            id: categoryId,
          },
          context: FetchOptions.realTime,
        })

        if (!data?.CategoriesKetagalan) return null

        return ArticleCategoryUtils.parse(lang, data.CategoriesKetagalan)
      }

      const { data } = await client.query<
        CategoriesArticleQuery,
        CategoriesArticleQueryVariables
      >({
        query: QUERY_CATEGORIES_ARTICLE,
        variables: {
          id: categoryId,
        },
        context: FetchOptions.realTime,
      })

      if (!data?.CategoriesArticle) return null

      return ArticleCategoryUtils.parse(lang, data.CategoriesArticle)
    } catch (error) {
      console.error('Failed to fetch highlighted categories:', error)
      return null
    }
  }

  /**
   * 取得文章列表
   * @param lang 語言
   * @param limit 限制數量
   * @param page 頁碼
   * @param where 條件
   * @returns 文章列表
   */
  static async getArticles(
    lang: Language,
    {
      limit = 9,
      page = 1,
      where,
      sort,
      articleType,
    }: {
      limit?: UstwArticlesQueryVariables['limit']
      page?: UstwArticlesQueryVariables['page']
      where?: UstwArticlesQueryVariables['where']
      sort?: UstwArticlesQueryVariables['sort']
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            page,
            limit,
            where,
            sort,
          },
          context: FetchOptions.realTime,
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
          []
        )
      }

      const { data } = await client.query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          page,
          limit,
          where,
        },
        context: FetchOptions.realTime,
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
        []
      )
    } catch (error) {
      console.error('Failed to fetch articles:', error)
      return []
    }
  }

  /**
   * 取得文章
   * @param lang 語言
   * @param id 文章ID
   * @returns 文章
   */
  static async getArticle(
    lang: Language,
    {
      id,
      articleType,
    }: {
      id: string
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          KetagalanArticleQuery,
          KetagalanArticleQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLE,
          variables: { id },
          context: FetchOptions.dynamic,
        })

        if (!data?.KetagalanArticle) return null

        return ArticleUtils.parse(lang, data.KetagalanArticle, articleType)
      }

      const { data } = await client.query<
        UstwArticleQuery,
        UstwArticleQueryVariables
      >({
        query: QUERY_USTW_ARTICLE,
        variables: { id },
        context: FetchOptions.dynamic,
      })

      if (!data?.UstwArticle) return null

      return ArticleUtils.parse(lang, data.UstwArticle, articleType)
    } catch (error) {
      console.error('Failed to fetch article:', error)
      throw error
    }
  }

  /**
   * 取得相關文章
   * @param lang 語言
   * @param id 文章ID
   * @returns 相關文章列表
   */
  static async getRelatedArticles(
    lang: Language,
    {
      id,
      articleType,
    }: {
      id: string
      articleType: ArticleType
    }
  ) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data: relatedData } = await client.query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit: 3,
            where: {
              id: {
                not_equals: id,
              },
            },
            sort: '-releaseTime',
          },
          context: FetchOptions.dynamic,
        })

        return (
          relatedData?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
          []
        )
      }

      const { data: relatedData } = await client.query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit: 3,
          where: {
            id: {
              not_equals: id,
            },
          },
          sort: '-releaseTime',
        },
        context: FetchOptions.dynamic,
      })

      return (
        relatedData?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) => ArticleUtils.parse(lang, article, articleType)) ??
        []
      )
    } catch (error) {
      console.error('Failed to fetch related articles:', error)
      return []
    }
  }

  /**
   * 取得文章分類 IDs
   * @param articleType 文章類型
   * @returns 分類 IDs 列表
   */
  static async getCategoryIds({ articleType }: { articleType: ArticleType }) {
    try {
      const client = getClient()
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await client.query<
          CategoriesKetagalansQuery,
          CategoriesKetagalansQueryVariables
        >({
          query: QUERY_CATEGORIES_KETAGALANS,
          context: FetchOptions.stable,
        })

        return (
          data?.CategoriesKetagalans?.docs
            ?.filter((category) => !isNull(category))
            .map((category) => category!.id)
            .filter((id) => !isNull(id) && !isUndefined(id)) ?? []
        )
      }

      const { data } = await client.query<
        CategoriesArticlesQuery,
        CategoriesArticlesQueryVariables
      >({
        query: QUERY_CATEGORIES_ARTICLES,
        context: FetchOptions.stable,
      })

      return (
        data?.CategoriesArticles?.docs
          ?.filter((category) => !isNull(category))
          .map((category) => category!.id)
          .filter((id) => !isNull(id) && !isUndefined(id)) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch category IDs:', error)
      return []
    }
  }
}
