import { WatchInfoEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchInfoPodcastCard } from '@/modules/Podcast/components/PodcastCard'

export default function WatchInfoPodcastPage() {
  return (
    <>
      <WatchInfoPodcastCard />
      <WatchInfoEpisodeList />
    </>
  )
}
