'use client'

import { getEpisode } from '@/modules/Podcast/api/soundon'
import { Episode } from '@/modules/Podcast/business/Episode'
import { useCallback, useEffect, useState } from 'react'
import { config } from '@/config'

/**
 * 取得 Episode
 * @param episodeId - Episode ID
 * @returns Episode
 */
export function useEpisode(episodeId: string) {
  const [episode, setEpisode] = useState<Episode | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchEpisode = useCallback(async () => {
    const podcastId = config.SOUNDON_PODCAST_ID
    if (!podcastId) {
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      const episode = await getEpisode({
        podcastId,
        episodeId,
      })
      setEpisode(episode)
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Failed to fetch episode')
      setError(error)
      console.error('Failed to fetch episode:', error)
    } finally {
      setIsLoading(false)
    }
  }, [episodeId])

  useEffect(() => {
    fetchEpisode()
  }, [fetchEpisode])

  return {
    episode,
    isLoading,
    error,
  }
}
