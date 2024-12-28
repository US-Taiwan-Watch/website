import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import usePodcastStore from '@/modules/Podcast/store/usePodcastStore'
import { useEffect } from 'react'

/**
 * PodcastFetcherProvider is a provider that fetches episodes from SoundOn API and sets them to the store.
 */
export default function PodcastFetcherProvider() {
  const setEpisodes = usePodcastStore.use.setEpisodes()

  useEffect(() => {
    ;(async () => {
      const podcastId = config.SOUNDON_PODCAST_ID
      if (!podcastId) return
      const episodes = await getEpisodes({ podcastId })
      setEpisodes(episodes)
    })()
  }, [setEpisodes])

  return null
}
