import EpisodeUtils from '@/modules/Podcast/business/Episode'
import {
  GetEpisodeParams,
  GetEpisodeResponse,
  GetEpisodesParams,
  GetEpisodesResponse,
} from '@/modules/Podcast/api/ApiType'

export const getEpisodes = async (params: GetEpisodesParams) => {
  try {
    const res = await fetch(
      typeof window !== 'undefined'
        ? '/api/podcast/episodes'
        : `https://api.soundon.fm/v2/client/podcasts/${process.env.SOUNDON_PODCAST_ID || params.podcastId}/episodes`,
      {
        headers:
          typeof window === 'undefined'
            ? { 'Api-Token': process.env.SOUNDON_API_TOKEN || '' }
            : {},
        // soundon api will return over 2MB, reaching the limit of Next.js data cache, therefore, skip cache mechanism.
        cache: 'no-store',
      }
    )
    const data = (await res.json()) as GetEpisodesResponse
    return data.data.map((episode) => EpisodeUtils.parse(episode.data))
  } catch {
    return []
  }
}

export const getEpisode = async (params: GetEpisodeParams) => {
  try {
    const res = await fetch(
      typeof window !== 'undefined'
        ? `/api/podcast/episodes?episodeId=${encodeURIComponent(params.episodeId)}`
        : `https://api.soundon.fm/v2/client/podcasts/${process.env.SOUNDON_PODCAST_ID || params.podcastId}/episodes/${params.episodeId}`,
      {
        headers:
          typeof window === 'undefined'
            ? { 'Api-Token': process.env.SOUNDON_API_TOKEN || '' }
            : {},
      }
    )
    const data = (await res.json()) as GetEpisodeResponse
    return EpisodeUtils.parse(data.data.data)
  } catch {
    return null
  }
}
