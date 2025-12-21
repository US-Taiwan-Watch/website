import type { MetadataRoute } from 'next'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { isNullish } from '@apollo/client/cache/inmemory/helpers'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const articleIds = (
    await ServerArticleApi.getArticleIds({
      articleType: ArticleType.Article,
    })
  )
    .map((article) => article.id)
    .filter((id) => !isNullish(id))

  const categoryIds =
    (await ServerArticleApi.getCategoryIds({
      articleType: ArticleType.Article,
    })) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.Article })),
    ...categoryIds
      .map((categoryId) =>
        resolveRouteUrl({
          name: RouteName.ArticleCategory,
          params: {
            categoryId,
          },
        })
      )
      .flatMap((page) => generatePageLinks(page)),
    ...articleIds
      .map((articleId) =>
        resolveRouteUrl({
          name: RouteName.ArticleDetail,
          params: {
            articleId,
          },
        })
      )
      .flatMap((page) => generatePageLinks(page)),
  ]
}
