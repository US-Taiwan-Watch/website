import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { WatchHereEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchHerePodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

export const dynamic = 'force-static'

export const revalidate = 86400

type WatchHerePodcastPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: WatchHerePodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.PodcastWatchHere }),
    namespace: 'seo_podcast_watch_here',
  })
}

export default async function WatchHerePodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })
  return (
    <>
      <WatchHerePodcastCard />
      <WatchHereEpisodeList episodes={episodes} />
    </>
  )
}
