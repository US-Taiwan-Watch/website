import {
  OpinionAuthor,
  OpinionAuthorArgs,
} from '@/modules/Opinion/classes/OpinionAuther'
import OpinionCategory, {
  OpinionCategoryArgs,
} from '@/modules/Opinion/classes/OpinionCategory'
import dayjs, { Dayjs } from 'dayjs'
import { isArray, isObject, isString } from 'lodash-es'

export type OpinionRepostSource = {
  title: string
  link: string
}

export type OpinionImage = {
  src: string
  caption?: string
}

export type OpinionTag = {
  label: string
  link?: string
}

export type OpinionResource = {
  title: string
  link: string
}

export interface OpinionArgs {
  id: string
  title: string
  subtitle?: string
  // TODO: TBD 會是 html 格式？
  description?: string
  categories?: Array<OpinionCategoryArgs>
  date?: string
  tags?: Array<OpinionTag>
  repostSources?: Array<OpinionRepostSource>
  thumbnailImage?: OpinionImage
  bannerImage?: OpinionImage
  contentHtml?: string
  resources?: Array<OpinionResource>
  author?: OpinionAuthorArgs
}

export class Opinion {
  id?: string
  title?: string
  subtitle?: string
  description?: string
  categories?: Array<OpinionCategory>
  date?: Dayjs
  tags?: Array<OpinionTag>
  repostSources?: Array<OpinionRepostSource>
  thumbnailImage?: OpinionImage
  bannerImage?: OpinionImage
  contentHtml?: string
  resources?: Array<OpinionResource>
  author?: OpinionAuthor

  constructor(args: OpinionArgs) {
    if (isString(args.id)) {
      this.id = args.id
    }
    if (isString(args.title)) {
      this.title = args.title
    }
    if (isString(args.subtitle)) {
      this.subtitle = args.subtitle
    }
    if (isString(args.description)) {
      this.description = args.description
    }
    if (isArray(args.categories)) {
      this.categories = args.categories.map(
        (category) => new OpinionCategory(category)
      )
    }
    if (isString(args.date) && dayjs(args.date).isValid()) {
      this.date = dayjs(args.date)
    }
    if (isArray(args.tags)) {
      this.tags = args.tags
    }
    if (isArray(args.repostSources)) {
      this.repostSources = args.repostSources
    }
    if (isObject(args.thumbnailImage)) {
      this.thumbnailImage = args.thumbnailImage
    }
    if (isObject(args.bannerImage)) {
      this.bannerImage = args.bannerImage
    }
    if (isString(args.contentHtml)) {
      this.contentHtml = args.contentHtml
    }
    if (isArray(args.resources)) {
      this.resources = args.resources
    }
    if (isObject(args.author)) {
      this.author = new OpinionAuthor(args.author)
    }
  }

  get link() {
    // FIXME: 暫時隱藏 opinion 的連結
    // return `${ROUTES.OPINION}/${this.id}`
    return '#'
  }
}
