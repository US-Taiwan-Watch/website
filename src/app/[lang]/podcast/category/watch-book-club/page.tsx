import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { WatchBookClubEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchBookClubPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

type WatchBookClubPodcastPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: WatchBookClubPodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.PodcastWatchBookClub }),
    namespace: 'seo_podcast_watch_book_club',
  })
}

export default async function WatchBookClubPodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })

  return (
    <>
      <WatchBookClubPodcastCard />
      <WatchBookClubEpisodeList episodes={episodes} />
    </>
  )
}
