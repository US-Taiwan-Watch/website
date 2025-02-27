'use client'

import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'

interface ArticlePodcastProps {
  episodeId: string
}

export default function ArticlePodcast({ episodeId }: ArticlePodcastProps) {
  const { episode } = useEpisode(episodeId)

  if (!episode) return null

  return <EpisodeCard episode={episode} />
}
