import type { MetadataRoute } from 'next'
import ServerPeopleApi from '@/modules/People/api/ServerPeopleApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const peopleIds = (await ServerPeopleApi.getPeopleIds()) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.People })),
    ...peopleIds
      .map((peopleId) =>
        resolveRouteUrl({
          name: RouteName.PeopleDetail,
          params: {
            peopleId,
          },
        })
      )
      .flatMap((page) => generatePageLinks(page)),
  ]
}
