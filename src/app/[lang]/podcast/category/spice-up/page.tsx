import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { SpiceUpEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { SpiceUpPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

type SpiceUpPodcastPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: SpiceUpPodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.PodcastSpiceUp }),
    namespace: 'seo_podcast_spice_up',
  })
}

export default async function SpiceUpPodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })
  return (
    <>
      <SpiceUpPodcastCard />
      <SpiceUpEpisodeList episodes={episodes} />
    </>
  )
}
