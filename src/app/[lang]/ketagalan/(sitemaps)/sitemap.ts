import type { MetadataRoute } from 'next'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const articles =
    (await ServerArticleApi.getArticleIds({
      articleType: ArticleType.Ketagalan,
    })) ?? []

  const categoryIds =
    (await ServerArticleApi.getCategoryIds({
      articleType: ArticleType.Ketagalan,
    })) ?? []

  const PAGES = [
    RouteName.KetagalanMedia,
    RouteName.KetagalanAboutProjects,
    RouteName.KetagalanAboutMembers,
    RouteName.KetagalanAboutFootprints,
  ] as const

  return [
    ...PAGES.flatMap((page) =>
      generatePageLinks(resolveRouteUrl({ name: page }))
    ),
    ...categoryIds.flatMap((categoryId) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.KetagalanMediaCategory,
          params: {
            categoryId,
          },
        })
      )
    ),
    ...articles.flatMap((article) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.KetagalanMediaDetail,
          params: {
            articleId: article.id,
          },
        }),
        article.updatedAt
      )
    ),
  ]
}
