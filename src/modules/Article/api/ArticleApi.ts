import {
  ArticleQuery,
  ArticleQueryVariables,
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { ArticleUtils } from '@/modules/Article/business/Article'
import { QUERY_ARTICLE, QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { isNull } from 'lodash-es'

export default class ArticleApi {
  /**
   * 取得首頁精選文章
   * @returns 首頁精選文章列表
   */
  static async getHomeFeaturedArticles({ limit = 3 }: { limit?: number }) {
    const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
      query: QUERY_ARTICLES,
      variables: {
        limit,
      },
    })

    return (
      data?.Articles?.docs
        ?.filter((article) => !isNull(article))
        .map((article) => ArticleUtils.parse(apiConfig.lang, article)) ?? []
    )
  }

  /**
   * 取得文章首頁文章
   * @param limit 限制數量
   * @returns 首頁文章列表
   */
  static async getLandingArticles({ limit = 4 }: { limit?: number }) {
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
        .map((article) => ArticleUtils.parse(apiConfig.lang, article)) ?? []
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
  }: {
    limit?: ArticlesQueryVariables['limit']
    page?: ArticlesQueryVariables['page']
    where?: ArticlesQueryVariables['where']
  }) {
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
        .map((article) => ArticleUtils.parse(apiConfig.lang, article)) ?? []
    )
  }

  /**
   * 取得文章
   * @param id 文章ID
   * @returns 文章
   */
  static async getArticle({ id }: { id: string }) {
    const { data } = await query<ArticleQuery, ArticleQueryVariables>({
      query: QUERY_ARTICLE,
      variables: { id },
    })

    if (!data?.Article) return null

    return ArticleUtils.parse(apiConfig.lang, data.Article)
  }

  /**
   * 取得相關文章
   * @param id 文章ID
   * @returns 相關文章列表
   */
  static async getRelatedArticles({ id }: { id: string }) {
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
        .map((article) => ArticleUtils.parse(apiConfig.lang, article)) ?? []
    )
  }
}
