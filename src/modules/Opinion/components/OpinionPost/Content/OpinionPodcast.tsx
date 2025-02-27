'use client'

import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'

interface OpinionPodcastProps {
  episodeId: string
}

export default function OpinionPodcast({ episodeId }: OpinionPodcastProps) {
  const { episode } = useEpisode(episodeId)

  if (!episode) return null

  return <EpisodeCard episode={episode} />
}
