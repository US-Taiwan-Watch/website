import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
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
  SPICE_UP = 'SPICE_UP', // 觀測站底加辣
  NOW_YOU_KNOW = 'NOW_YOU_KNOW', // 觀測站予你知
  BOOK_CLUB = 'BOOK_CLUB', // 觀測站讀書會
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
    const regex = PodcastUtils.episodeTitleRegexMap[podcast.type]
    return episodes
      .filter((episode) => episode.title && regex.test(episode.title))
      .sort((a, b) => {
        const aDate = DateUtils.safeParseLocal(a.createdAt)
        const bDate = DateUtils.safeParseLocal(b.createdAt)
        if (sort === 'CREATED_AT_ASC') return aDate.diff(bDate)
        if (sort === 'CREATED_AT_DESC') return bDate.diff(aDate)
        return 0
      })
      .slice(0, limit)
  }

  /**
   * Episode Title 不包含「觀測站予你知」和「觀測站讀書會」
   */
  static spiceUpEpisodeTitleRegex = /(?!.*觀測站予你知|觀測站讀書會)/
  /**
   * Episode Title 有包含「觀測站予你知」
   */
  static nowYouKnowEpisodeTitleRegex = /觀測站予你知/
  /**
   * Episode Title 有包含「觀測站讀書會」
   */
  static bookClubEpisodeTitleRegex = /觀測站讀書會/

  static episodeTitleRegexMap: Record<PodcastType, RegExp> = {
    [PodcastType.SPICE_UP]: PodcastUtils.spiceUpEpisodeTitleRegex,
    [PodcastType.NOW_YOU_KNOW]: PodcastUtils.nowYouKnowEpisodeTitleRegex,
    [PodcastType.BOOK_CLUB]: PodcastUtils.bookClubEpisodeTitleRegex,
  }

  /** Podcast pages */
  static getPodcastPageLink(type: PodcastType) {
    const { resolveRouteUrl } = getURouterServer()
    switch (type) {
      case PodcastType.SPICE_UP:
        return resolveRouteUrl({ name: RouteName.PodcastSpiceUp })
      case PodcastType.NOW_YOU_KNOW:
        return resolveRouteUrl({ name: RouteName.PodcastNowYouKnow })
      case PodcastType.BOOK_CLUB:
        return resolveRouteUrl({ name: RouteName.PodcastBookClub })
      default:
        return ''
    }
  }
}
