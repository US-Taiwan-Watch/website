import type { MetadataRoute } from 'next'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const articles = await ServerArticleApi.getArticleIds({
    articleType: ArticleType.Article,
  })

  const categoryIds =
    (await ServerArticleApi.getCategoryIds({
      articleType: ArticleType.Article,
    })) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.Article })),
    ...categoryIds.flatMap((categoryId) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.ArticleCategory,
          params: {
            categoryId,
          },
        })
      )
    ),
    ...articles.flatMap((article) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.ArticleDetail,
          params: {
            articleId: article.id,
          },
        }),
        article.updatedAt
      )
    ),
  ]
}
