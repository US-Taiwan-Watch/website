import { DateUtils } from '@/modules/Common/business/Date'
import { Episode } from '@/modules/Podcast/business/Episode'
import { z } from 'zod'

export enum PodcastSourceType {
  APPLE = 'APPLE',
  SPOTIFY = 'SPOTIFY',
  SOUND_ON = 'SOUND_ON',
}

interface PodcastSource {
  type: PodcastSourceType
  url: string
}

export enum PodcastType {
  WATCH_HERE = 'WATCH_HERE', // 觀測站底加辣
  WATCH_INFO = 'WATCH_INFO', // 觀測站予你知
  WATCH_BOOK_CLUB = 'WATCH_BOOK_CLUB', // 觀測站讀書會
}

/**
 * 過濾 Episode 的排序方式
 */
type FilterEpisodesSort = 'CREATED_AT_ASC' | 'CREATED_AT_DESC'

const podcastSchema = z.object({
  type: z.nativeEnum(PodcastType),
  bannerImg: z.string(),
  title: z.string(),
  description: z.string(),
})

export type PodcastInput = z.input<typeof podcastSchema>
export type Podcast = z.infer<typeof podcastSchema>

export default class PodcastUtils {
  static parse(dto: PodcastInput): Podcast {
    return podcastSchema.parse({
      type: dto.type,
      bannerImg: dto.bannerImg,
      title: dto.title,
      description: dto.description,
    })
  }

  static sources: Array<PodcastSource> = [
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

  /**
   * 根據 Podcast Type 過濾 Episode
   * @param podcast - Podcast
   * @param episodes - 所有 Episode
   * @param sort - 排序方式
   * @param limit - 限制數量
   * @returns 過濾後的 Episode
   */
  static filterEpisodes(
    podcast: Podcast,
    episodes: Array<Episode>,
    sort?: FilterEpisodesSort,
    limit?: number
  ): Array<Episode> {
    if (!podcast.type) return []
    const regex = PodcastUtils.watchEpisodeTitleRegexMap[podcast.type]
    return episodes
      .filter((episode) => episode.title && regex.test(episode.title))
      .sort((a, b) => {
        if (sort === 'CREATED_AT_ASC')
          return DateUtils.safeParseLocal(a.createdAt).diff(
            DateUtils.safeParseLocal(b.createdAt)
          )
        if (sort === 'CREATED_AT_DESC')
          return DateUtils.safeParseLocal(b.createdAt).diff(
            DateUtils.safeParseLocal(a.createdAt)
          )
        return 0
      })
      .slice(0, limit)
  }

  /**
   * Episode Title 不包含「觀測站予你知」和「觀測站讀書會」
   */
  static watchHereEpisodeTitleRegex = /(?!.*觀測站予你知|觀測站讀書會)/
  /**
   * Episode Title 有包含「觀測站予你知」
   */
  static watchInfoEpisodeTitleRegex = /觀測站予你知/
  /**
   * Episode Title 有包含「觀測站讀書會」
   */
  static watchBookClubEpisodeTitleRegex = /觀測站讀書會/

  static watchEpisodeTitleRegexMap: Record<PodcastType, RegExp> = {
    [PodcastType.WATCH_HERE]: PodcastUtils.watchHereEpisodeTitleRegex,
    [PodcastType.WATCH_INFO]: PodcastUtils.watchInfoEpisodeTitleRegex,
    [PodcastType.WATCH_BOOK_CLUB]: PodcastUtils.watchBookClubEpisodeTitleRegex,
  }
}
