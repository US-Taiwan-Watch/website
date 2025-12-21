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
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
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
} from '@/modules/Article/graphql/gql'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { isNull, isUndefined } from 'lodash-es'

/**
 * Article API
 *
 * @description Article 的 RSC 端 API 實作
 */
export default class ServerArticleApi {
  /**
   * 取得文章 IDs 和更新時間
   * @returns 文章 IDs 和 updatedAt 列表
   */
  static async getArticleIds({
    articleType,
  }: {
    articleType: ArticleType
  }): Promise<{ id: string; updatedAt: string }[]> {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          KetagalanArticleIdsQuery,
          KetagalanArticleIdsQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLE_IDS,
        })

        return (
          (data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .filter(
              (article) => !isNull(article.id) && !isUndefined(article.id)
            ) as { id: string; updatedAt: string }[]) ?? []
        )
      }

      const { data } = await query<
        UstwArticleIdsQuery,
        UstwArticleIdsQueryVariables
      >({
        query: QUERY_USTW_ARTICLE_IDS,
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
   * @returns 首頁精選文章列表
   */
  static async getHomeFeaturedArticles({
    limit = 3,
    articleType,
  }: {
    limit?: number
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit,
          },
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) =>
              ArticleUtils.parse(apiConfig.lang, article, articleType)
            ) ?? []
        )
      }

      const { data } = await query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit,
        },
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) =>
            ArticleUtils.parse(apiConfig.lang, article, articleType)
          ) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch home featured articles:', error)
      return []
    }
  }

  /**
   * 取得首頁文章
   * @returns 首頁文章列表
   */
  static async getHomeArticles({
    limit = 3,
    articleType,
  }: {
    limit?: number
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            limit,
            sort: '-releaseTime',
          },
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) =>
              ArticleUtils.parse(apiConfig.lang, article, articleType)
            ) ?? []
        )
      }

      const { data } = await query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          limit,
        },
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) =>
            ArticleUtils.parse(apiConfig.lang, article, articleType)
          ) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch home articles:', error)
      return []
    }
  }

  /**
   * 取得文章首頁文章
   * @param limit 限制數量
   * @returns 首頁文章列表
   */
  static async getLandingArticles({
    limit = 4,
    articleType,
  }: {
    limit?: number
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
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
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) =>
              ArticleUtils.parse(apiConfig.lang, article, articleType)
            ) ?? []
        )
      }

      const { data } = await query<
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
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) =>
            ArticleUtils.parse(apiConfig.lang, article, articleType)
          ) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch landing articles:', error)
      return []
    }
  }

  /**
   * 取得文章列表
   * @param limit 限制數量
   * @param page 頁碼
   * @param where 條件
   * @returns 文章列表
   */
  static async getArticles({
    limit = 9,
    page = 1,
    where,
    articleType,
  }: {
    limit?: UstwArticlesQueryVariables['limit']
    page?: UstwArticlesQueryVariables['page']
    where?: UstwArticlesQueryVariables['where']
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          KetagalanArticlesQuery,
          KetagalanArticlesQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLES,
          variables: {
            page,
            limit,
            where,
          },
        })

        return (
          data?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) =>
              ArticleUtils.parse(apiConfig.lang, article, articleType)
            ) ?? []
        )
      }

      const { data } = await query<
        UstwArticlesQuery,
        UstwArticlesQueryVariables
      >({
        query: QUERY_USTW_ARTICLES,
        variables: {
          page,
          limit,
          where,
        },
      })

      return (
        data?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) =>
            ArticleUtils.parse(apiConfig.lang, article, articleType)
          ) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch articles:', error)
      return []
    }
  }

  /**
   * 取得文章
   * @param id 文章ID
   * @returns 文章
   */
  static async getArticle({
    id,
    articleType,
  }: {
    id: string
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          KetagalanArticleQuery,
          KetagalanArticleQueryVariables
        >({
          query: QUERY_KETAGALAN_ARTICLE,
          variables: { id },
        })

        if (!data?.KetagalanArticle) return null

        return ArticleUtils.parse(
          apiConfig.lang,
          data.KetagalanArticle,
          articleType
        )
      }

      const { data } = await query<UstwArticleQuery, UstwArticleQueryVariables>(
        {
          query: QUERY_USTW_ARTICLE,
          variables: { id },
        }
      )

      if (!data?.UstwArticle) return null

      return ArticleUtils.parse(apiConfig.lang, data.UstwArticle, articleType)
    } catch (error) {
      console.error('Failed to fetch article:', error)
      return null
    }
  }

  /**
   * 取得相關文章
   * @param id 文章ID
   * @returns 相關文章列表
   */
  static async getRelatedArticles({
    id,
    articleType,
  }: {
    id: string
    articleType: ArticleType
  }) {
    try {
      if (articleType === ArticleType.Ketagalan) {
        const { data: relatedData } = await query<
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
        })

        return (
          relatedData?.KetagalanArticles?.docs
            ?.filter((article) => !isNull(article))
            .map((article) =>
              ArticleUtils.parse(apiConfig.lang, article, articleType)
            ) ?? []
        )
      }

      const { data: relatedData } = await query<
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
      })

      return (
        relatedData?.UstwArticles?.docs
          ?.filter((article) => !isNull(article))
          .map((article) =>
            ArticleUtils.parse(apiConfig.lang, article, articleType)
          ) ?? []
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
      if (articleType === ArticleType.Ketagalan) {
        const { data } = await query<
          CategoriesKetagalansQuery,
          CategoriesKetagalansQueryVariables
        >({
          query: QUERY_CATEGORIES_KETAGALANS,
        })

        return (
          data?.CategoriesKetagalans?.docs
            ?.filter((category) => !isNull(category))
            .map((category) => category!.id)
            .filter((id) => !isNull(id) && !isUndefined(id)) ?? []
        )
      }

      const { data } = await query<
        CategoriesArticlesQuery,
        CategoriesArticlesQueryVariables
      >({
        query: QUERY_CATEGORIES_ARTICLES,
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
