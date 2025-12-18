import { DateUtils } from '@/modules/Common/business/Date'
import { PodcastSourceType } from '@/modules/Podcast/business/Podcast'
import { z } from 'zod'

type EpisodeSource = {
  type: PodcastSourceType
  url: string
}

const episodeSchema = z.object({
  id: z.string().optional(),
  guid: z.string().optional(),
  hash: z.string().optional(),
  title: z.string().optional(),
  audioUrl: z.string().optional(),
  explicit: z.boolean().optional(),
  description: z.string().optional(),
  complete: z.boolean().optional(),
  publishDate: z.string().optional(),
  itunesKeywords: z.array(z.string()).optional(),
  audioType: z.string().optional(),
  duration: z.number().optional(),
  artistName: z.string().optional(),
  url: z.string().optional(),
  cover: z.string().optional(),
  season: z.number().optional(),
  episode: z.number().optional(),
  contentEncoded: z.string().optional(),
  podcastId: z.string().optional(),
  summary: z.string().optional(),
  episodeType: z.string().optional(),
  exclusiveType: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  weight: z.number().optional(),
  keywords: z.array(z.string()).optional(),
  activated: z.boolean().optional(),
})

export type EpisodeInput = z.input<typeof episodeSchema>
export type Episode = z.infer<typeof episodeSchema>

export default class EpisodeUtils {
  static parse(dto: EpisodeInput): Episode {
    return episodeSchema.parse(dto)
  }

  static getFormattedPublishDate(publishDate: string) {
    return DateUtils.formatLocal(publishDate, 'MMM DD, YYYY').toUpperCase()
  }

  static getLink(episodeId: Episode['id']) {
    if (!episodeId) return '#'
    return `/podcast/${episodeId}`
  }

  /**
   * 取得所有單集 Podcast 來源
   * @returns 所有單集 Podcast 來源
   */
  static getSources(): Array<EpisodeSource> {
    return [
      {
        type: PodcastSourceType.APPLE,
        url: 'https://podcasts.apple.com/tw/podcast/%E7%BE%8E%E5%9C%8B%E5%8F%B0%E7%81%A3%E8%A7%80%E6%B8%AC%E7%AB%99/id1508245836',
      },
      {
        type: PodcastSourceType.SPOTIFY,
        url: 'https://open.spotify.com/show/5CnwG4Tfr7YaQ42FETAI5t?si=94e8ae59fd124371',
      },
      {
        type: PodcastSourceType.SOUND_ON,
        url: 'https://player.soundon.fm/p/6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
      },
    ]
  }
}
