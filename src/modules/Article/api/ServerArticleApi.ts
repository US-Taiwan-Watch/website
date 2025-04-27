import {
  ArticleQuery,
  ArticleQueryVariables,
  ArticlesQuery,
  ArticlesQueryVariables,
  KetagalanArticleQuery,
  KetagalanArticleQueryVariables,
  KetagalanArticlesQuery,
  KetagalanArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { ArticleType, ArticleUtils } from '@/modules/Article/business/Article'
import {
  QUERY_ARTICLE,
  QUERY_ARTICLES,
  QUERY_KETAGALAN_ARTICLE,
  QUERY_KETAGALAN_ARTICLES,
} from '@/modules/Article/graphql/gql'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { isNull } from 'lodash-es'

/**
 * Article API
 *
 * @description Article 的 RSC 端 API 實作
 */
export default class ServerArticleApi {
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

    const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
      query: QUERY_ARTICLES,
      variables: {
        limit,
      },
    })

    return (
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) =>
          ArticleUtils.parse(apiConfig.lang, article, articleType)
        ) ?? []
    )
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

    const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
      query: QUERY_ARTICLES,
      variables: {
        limit,
      },
    })

    return (
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) =>
          ArticleUtils.parse(apiConfig.lang, article, articleType)
        ) ?? []
    )
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

    const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
      query: QUERY_ARTICLES,
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
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) =>
          ArticleUtils.parse(apiConfig.lang, article, articleType)
        ) ?? []
    )
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
    limit?: ArticlesQueryVariables['limit']
    page?: ArticlesQueryVariables['page']
    where?: ArticlesQueryVariables['where']
    articleType: ArticleType
  }) {
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

    const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
      query: QUERY_ARTICLES,
      variables: {
        page,
        limit,
        where,
      },
    })

    return (
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) =>
          ArticleUtils.parse(apiConfig.lang, article, articleType)
        ) ?? []
    )
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

    const { data } = await query<ArticleQuery, ArticleQueryVariables>({
      query: QUERY_ARTICLE,
      variables: { id },
    })

    if (!data?.Article) return null

    return ArticleUtils.parse(apiConfig.lang, data.Article, articleType)
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
    if (articleType === ArticleType.Ketagalan) {
      const { data: relatedData } = await query<
        KetagalanArticlesQuery,
        KetagalanArticlesQueryVariables
      >({
        query: QUERY_ARTICLES,
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
      ArticlesQuery,
      ArticlesQueryVariables
    >({
      query: QUERY_ARTICLES,
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
      relatedData?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) =>
          ArticleUtils.parse(apiConfig.lang, article, articleType)
        ) ?? []
    )
  }
}
