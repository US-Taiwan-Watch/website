import type { MetadataRoute } from 'next'
import ServerPeopleApi from '@/modules/People/api/ServerPeopleApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const peoples = (await ServerPeopleApi.getPeopleIds()) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.People })),
    ...peoples.flatMap((people) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.PeopleDetail,
          params: {
            peopleId: people.id,
          },
        }),
        people.updatedAt
      )
    ),
  ]
}
