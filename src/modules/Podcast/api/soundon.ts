import { config } from '@/config'
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
      `https://api.soundon.fm/v2/client/podcasts/${params.podcastId}/episodes`,
      {
        headers: {
          'Api-Token': `${config.SOUNDON_API_TOKEN}`,
        },
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
      `https://api.soundon.fm/v2/client/podcasts/${params.podcastId}/episodes/${params.episodeId}`,
      {
        headers: {
          'Api-Token': `${config.SOUNDON_API_TOKEN}`,
        },
      }
    )
    const data = (await res.json()) as GetEpisodeResponse
    return EpisodeUtils.parse(data.data.data)
  } catch {
    return null
  }
}
