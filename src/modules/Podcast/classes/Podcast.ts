import { Episode } from '@/modules/Podcast/classes/Episode'
import { isString } from 'lodash-es'

// TODO: 類性待確定
export enum PodcastSourceType {
  APPLE = 'APPLE',
  GOOGLE = 'GOOGLE',
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

interface PodcastArgs {
  type: PodcastType
  bannerImg: string
  title: string
  description: string
}

export default class Podcast {
  /** Podcast Type */
  type?: PodcastType
  /** Podcast Title */
  title?: string
  /** Banner Image URL */
  bannerImg?: string
  /** Podcast Description */
  description?: string

  constructor(private args: PodcastArgs) {
    if (isString(args.type)) {
      this.type = args.type
    }
    if (isString(args.bannerImg)) {
      this.bannerImg = args.bannerImg
    }
    if (isString(args.title)) {
      this.title = args.title
    }
    if (isString(args.description)) {
      this.description = args.description
    }
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
    const regex = Podcast.watchEpisodeTitleRegexMap[podcast.type]
    return episodes
      .filter((episode) => episode.title && regex.test(episode.title))
      .sort((a, b) => {
        if (sort === 'CREATED_AT_ASC')
          return a.createdAt?.diff(b.createdAt) ?? 0
        if (sort === 'CREATED_AT_DESC')
          return b.createdAt?.diff(a.createdAt) ?? 0
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
    [PodcastType.WATCH_HERE]: Podcast.watchHereEpisodeTitleRegex,
    [PodcastType.WATCH_INFO]: Podcast.watchInfoEpisodeTitleRegex,
    [PodcastType.WATCH_BOOK_CLUB]: Podcast.watchBookClubEpisodeTitleRegex,
  }
}
