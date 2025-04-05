import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { WatchBookClubEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchBookClubPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'

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
