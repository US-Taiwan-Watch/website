import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { WatchHereEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchHerePodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'

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
