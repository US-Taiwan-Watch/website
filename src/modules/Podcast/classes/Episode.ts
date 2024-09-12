import { isString, isBoolean, isNumber, isArray } from "lodash-es";
import { GetEpisodeResponse } from "@/modules/Podcast/types/GetEpisode";
import dayjs from "dayjs";

export class Episode {
  id?: string;
  guid?: string;
  hash?: string;
  title?: string;
  audioUrl?: string;
  explicit?: boolean;
  description?: string;
  complete?: boolean;
  publishDate?: string;
  itunesKeywords?: string[];
  audioType?: string;
  duration?: number;
  artistName?: string;
  url?: string;
  cover?: string;
  season?: number;
  episode?: number;
  contentEncoded?: string;
  podcastId?: string;
  summary?: string;
  episodeType?: string;
  exclusiveType?: string;
  createdAt?: string;
  updatedAt?: string;
  weight?: number;
  keywords?: string[];

  constructor(private params: GetEpisodeResponse["data"]["data"]) {
    this.id = isString(params.id) ? params.id : undefined;
    this.guid = isString(params.guid) ? params.guid : undefined;
    this.hash = isString(params.hash) ? params.hash : undefined;
    this.title = isString(params.title) ? params.title : undefined;
    this.audioUrl = isString(params.audioUrl) ? params.audioUrl : undefined;
    this.explicit = isBoolean(params.explicit) ? params.explicit : undefined;
    this.description = isString(params.description)
      ? params.description
      : undefined;
    this.complete = isBoolean(params.complete) ? params.complete : undefined;
    this.publishDate = isString(params.publishDate)
      ? params.publishDate
      : undefined;
    this.itunesKeywords = isArray(params.itunesKeywords)
      ? params.itunesKeywords
      : undefined;
    this.audioType = isString(params.audioType) ? params.audioType : undefined;
    this.duration = isNumber(params.duration) ? params.duration : undefined;
    this.artistName = isString(params.artistName)
      ? params.artistName
      : undefined;
    this.url = isString(params.url) ? params.url : undefined;
    this.cover = isString(params.cover) ? params.cover : undefined;
    this.season = isNumber(params.season) ? params.season : undefined;
    this.episode = isNumber(params.episode) ? params.episode : undefined;
    this.contentEncoded = isString(params.contentEncoded)
      ? params.contentEncoded
      : undefined;
    this.podcastId = isString(params.podcastId) ? params.podcastId : undefined;
    this.summary = isString(params.summary) ? params.summary : undefined;
    this.episodeType = isString(params.episodeType)
      ? params.episodeType
      : undefined;
    this.exclusiveType = isString(params.exclusiveType)
      ? params.exclusiveType
      : undefined;
    this.createdAt = isString(params.createdAt) ? params.createdAt : undefined;
    this.updatedAt = isString(params.updatedAt) ? params.updatedAt : undefined;
    this.weight = isNumber(params.weight) ? params.weight : undefined;
    this.keywords = isArray(params.keywords) ? params.keywords : undefined;
  }

  get formattedPublishDate() {
    return dayjs(this.publishDate).format("MMM DD, YYYY").toUpperCase();
  }
}
