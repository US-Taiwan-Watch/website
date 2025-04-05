import { WatchBookClubEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { WatchBookClubPodcastCard } from '@/modules/Podcast/components/PodcastCard'

export default function WatchBookClubPodcastPage() {
  return (
    <>
      <WatchBookClubPodcastCard />
      <WatchBookClubEpisodeList />
    </>
  )
}
