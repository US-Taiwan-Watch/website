import { generatePageLinks } from '@/common/utils/sitemap.utils'
import type { MetadataRoute } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  return [...generatePageLinks(resolveRouteUrl({ name: RouteName.Home }))]
}
