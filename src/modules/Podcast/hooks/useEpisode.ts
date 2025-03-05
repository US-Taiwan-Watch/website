'use client'

import { getEpisode } from '@/modules/Podcast/api/soundon'
import { Episode } from '@/modules/Podcast/classes/Episode'
import { useCallback, useEffect, useState } from 'react'
import { config } from '@/config'

/**
 * 取得 Episode
 * @param episodeId - Episode ID
 * @returns Episode
 */
export function useEpisode(episodeId: string) {
  const [episode, setEpisode] = useState<Episode | null>(null)

  const fetchEpisode = useCallback(async () => {
    const podcastId = config.SOUNDON_PODCAST_ID
    if (!podcastId) return

    const episode = await getEpisode({
      podcastId,
      episodeId,
    })
    setEpisode(episode)
  }, [episodeId])

  useEffect(() => {
    fetchEpisode()
  }, [fetchEpisode])

  return {
    episode,
  }
}
