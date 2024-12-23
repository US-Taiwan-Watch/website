import { getEpisode } from '@/modules/Podcast/api/soundon'
import { Episode } from '@/modules/Podcast/classes/Episode'
import { useCallback, useEffect, useMemo, useState } from 'react'

export function useEpisode(podcastId: string, episodeId: string) {
  const [episode, setEpisode] = useState<Episode | null>(null)

  const fetchEpisode = useCallback(async () => {
    const episode = await getEpisode({ podcastId, episodeId })
    setEpisode(episode)
  }, [podcastId, episodeId])

  useEffect(() => {
    fetchEpisode()
  }, [fetchEpisode])

  const soundonLink = useMemo(() => {
    return `https://player.soundon.fm/p/${podcastId}/episodes/${episodeId}`
  }, [podcastId, episodeId])

  return {
    episode,
    soundonLink,
  }
}
