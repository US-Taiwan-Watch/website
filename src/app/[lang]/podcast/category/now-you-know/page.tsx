import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { NowYouKnowEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { NowYouKnowPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

type NowYouKnowPodcastPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: NowYouKnowPodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.PodcastNowYouKnow }),
    namespace: 'seo_podcast_now_you_know',
  })
}

export default async function NowYouKnowPodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })
  return (
    <>
      <NowYouKnowPodcastCard />
      <NowYouKnowEpisodeList episodes={episodes} />
    </>
  )
}
