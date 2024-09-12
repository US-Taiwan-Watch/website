import { isArray, isString } from 'lodash-es'

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

// 控制背景顏色用，我想顏色應該不是用 Array index 去控制...
export enum PodcastType {
  WATCH_HERE = 'WATCH_HERE',
  WATCH_INFO = 'WATCH_INFO',
  WATCH_BOOK_CLUB = 'WATCH_BOOK_CLUB',
}

interface PodcastArgs {
  id: string
  type: PodcastType
  bannerImg: string
  title: string
  description: string
  sources: Array<PodcastSource>
  podcastId: string
  episodeIdx: Array<string>
}

export default class Podcast {
  /** DB ID */
  id?: string
  /** Podcast Type */
  type?: PodcastType
  /** Podcast Title */
  title?: string
  /** Banner Image URL */
  bannerImg?: string
  /** Podcast Description */
  description?: string
  /** Podcast Sources */
  sources?: Array<PodcastSource>
  /** SoundOn Podcast ID */
  podcastId?: string
  /** SoundOn Episode ID */
  episodeIdx?: Array<string>

  constructor(private args: PodcastArgs) {
    if (isString(args.id)) {
      this.id = args.id
    }
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
    if (isArray(args.sources)) {
      this.sources = args.sources
    }
    if (isString(args.podcastId)) {
      this.podcastId = args.podcastId
    }
    if (isArray(args.episodeIdx)) {
      this.episodeIdx = args.episodeIdx
    }
  }
}
