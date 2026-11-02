import { generatePageLinks } from '@/common/utils/sitemap.utils'
import type { MetadataRoute } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()

  const PAGES = (
    [
      RouteName.AboutMission,
      RouteName.AboutProjects,
      RouteName.AboutMembers,
      RouteName.AboutFootprints,
      RouteName.AboutNewsroom,
      RouteName.AboutData,
      RouteName.AboutTermsOfServiceAndPrivacyPolicy,
      RouteName.AboutDonation,
    ] as const
  ).map((page) => resolveRouteUrl({ name: page }))

  return PAGES.flatMap((page) => generatePageLinks(page))
}
