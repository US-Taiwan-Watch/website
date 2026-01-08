import { Language } from '@/common/lib/i18n/types'
import { config } from '@/config'
import { getEpisode, getEpisodes } from '@/modules/Podcast/api/soundon'
import { notFound } from 'next/navigation'
import EpisodePost from '@/modules/Podcast/components/EpisodePost'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

export const revalidate = 86400

type PodcastPageProps = {
  params: {
    id: string
    lang: Language
  }
}

export const generateStaticParams = async ({ params }: PodcastPageProps) => {
  const podcastId = config.SOUNDON_PODCAST_ID
  const episodes = podcastId ? await getEpisodes({ podcastId }) : []
  return episodes.map((episode) => ({ id: episode.id, lang: params.lang }))
}

export const generateMetadata = async ({
  params,
}: PodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  let episodeTitle = ''
  let episodeDescription
  const podcastId = config.SOUNDON_PODCAST_ID
  if (podcastId) {
    const episode = await getEpisode({ podcastId, episodeId: params.id })
    if (episode) {
      episodeTitle = episode.title ?? ''
      episodeDescription = episode.description
    }
  }
  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.PodcastDetail,
        params: { episodeId: params.id },
      }),
      namespace: 'seo_podcast_detail',
      titleVariables: {
        episodeTitle,
      },
    })),
    ...(episodeDescription && { description: episodeDescription }),
  }
}

export default async function PodcastPage({ params }: PodcastPageProps) {
  const { id } = params
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episode = await getEpisode({ podcastId, episodeId: id })
  if (!episode) {
    notFound()
  }
  return <EpisodePost episode={episode} />
}
