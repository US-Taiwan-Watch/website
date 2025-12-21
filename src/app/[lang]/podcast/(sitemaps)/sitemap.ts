import type { MetadataRoute } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { config } from '@/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const podcastId = config.SOUNDON_PODCAST_ID

  const episodes = podcastId ? await getEpisodes({ podcastId }) : []
  const episodeIds = episodes.map((episode) => episode.id)

  const PAGES = [
    RouteName.PodcastWatchHere,
    RouteName.PodcastWatchInfo,
    RouteName.PodcastWatchBookClub,
  ] as const

  return [
    ...PAGES.flatMap((page) =>
      generatePageLinks(resolveRouteUrl({ name: page }))
    ),
    ...episodeIds
      .map((episodeId) =>
        resolveRouteUrl({
          name: RouteName.PodcastDetail,
          params: {
            episodeId,
          },
        })
      )
      .flatMap((page) => generatePageLinks(page)),
  ]
}
