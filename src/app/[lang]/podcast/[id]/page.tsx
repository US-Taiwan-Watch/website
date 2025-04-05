import { Language } from '@/common/lib/i18n/types'
import { config } from '@/config'
import { getEpisode } from '@/modules/Podcast/api/soundon'
import { notFound } from 'next/navigation'
import EpisodePost from '@/modules/Podcast/components/EpisodePost'

type PodcastPageProps = {
  params: {
    id: string
    lang: Language
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
