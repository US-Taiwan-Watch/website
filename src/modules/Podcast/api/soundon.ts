import { Episode } from '@/modules/Podcast/classes/Episode'
import {
  GetEpisodeParams,
  GetEpisodeResponse,
} from '@/modules/Podcast/types/GetEpisode'

export const getEpisode = async (params: GetEpisodeParams) => {
  try {
    const res = await fetch(
      `https://api.soundon.fm/v2/client/podcasts/${params.podcastId}/episodes/${params.episodeId}`,
      {
        headers: {
          'Api-Token': `${process.env.NEXT_PUBLIC_SOUNDON_API_TOKEN}`,
        },
      }
    )
    const data = (await res.json()) as GetEpisodeResponse
    return new Episode(data.data.data)
  } catch (error) {
    console.error(error)
    return null
  }
}
