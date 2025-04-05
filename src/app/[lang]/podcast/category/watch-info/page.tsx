import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { WatchInfoEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchInfoPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'

export default async function WatchInfoPodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })
  return (
    <>
      <WatchInfoPodcastCard />
      <WatchInfoEpisodeList episodes={episodes} />
    </>
  )
}
