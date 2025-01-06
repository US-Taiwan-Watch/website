import { isString, isBoolean, isNumber, isArray } from 'lodash-es'
import { EpisodeResponse } from '@/modules/Podcast/api/ApiType'
import dayjs, { Dayjs } from 'dayjs'

export class Episode {
  id?: string
  guid?: string
  hash?: string
  title?: string
  audioUrl?: string
  explicit?: boolean
  description?: string
  complete?: boolean
  publishDate?: string
  itunesKeywords?: string[]
  audioType?: string
  duration?: number
  artistName?: string
  url?: string
  cover?: string
  season?: number
  episode?: number
  contentEncoded?: string
  podcastId?: string
  summary?: string
  episodeType?: string
  exclusiveType?: string
  createdAt?: Dayjs
  updatedAt?: Dayjs
  weight?: number
  keywords?: string[]

  constructor(private params: EpisodeResponse['data']) {
    if (isString(params.id)) this.id = params.id
    if (isString(params.guid)) this.guid = params.guid
    if (isString(params.hash)) this.hash = params.hash
    if (isString(params.title)) this.title = params.title
    if (isString(params.audioUrl)) this.audioUrl = params.audioUrl
    if (isBoolean(params.explicit)) this.explicit = params.explicit
    if (isString(params.description)) this.description = params.description
    if (isBoolean(params.complete)) this.complete = params.complete
    if (isString(params.publishDate)) this.publishDate = params.publishDate
    if (isArray(params.itunesKeywords))
      this.itunesKeywords = params.itunesKeywords
    if (isString(params.audioType)) this.audioType = params.audioType
    if (isNumber(params.duration)) this.duration = params.duration
    if (isString(params.artistName)) this.artistName = params.artistName
    if (isString(params.url)) this.url = params.url
    if (isString(params.cover)) this.cover = params.cover
    if (isNumber(params.season)) this.season = params.season
    if (isNumber(params.episode)) this.episode = params.episode
    if (isString(params.contentEncoded))
      this.contentEncoded = params.contentEncoded
    if (isString(params.podcastId)) this.podcastId = params.podcastId
    if (isString(params.summary)) this.summary = params.summary
    if (isString(params.episodeType)) this.episodeType = params.episodeType
    if (isString(params.exclusiveType))
      this.exclusiveType = params.exclusiveType
    if (isString(params.createdAt) && dayjs(params.createdAt).isValid())
      this.createdAt = dayjs(params.createdAt)
    if (isString(params.updatedAt) && dayjs(params.updatedAt).isValid())
      this.updatedAt = dayjs(params.updatedAt)
    if (isNumber(params.weight)) this.weight = params.weight
    if (isArray(params.keywords)) this.keywords = params.keywords
  }

  get formattedPublishDate() {
    return dayjs(this.publishDate).format('MMM DD, YYYY').toUpperCase()
  }

  get soundonLink() {
    return `https://player.soundon.fm/p/${this.podcastId}/episodes/${this.id}`
  }
}
