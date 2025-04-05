import dayjs from 'dayjs'
import { z } from 'zod'

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
    return dayjs(publishDate).format('MMM DD, YYYY').toUpperCase()
  }

  static getSoundonLink(podcastId: string, episodeId: string) {
    return `https://player.soundon.fm/p/${podcastId}/episodes/${episodeId}`
  }
}
