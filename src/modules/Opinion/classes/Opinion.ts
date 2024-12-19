import CommonUtils from '@/modules/Common/Common.utils'
import { Language } from '@/common/lib/i18n/types'
import {
  OpinionAuthor,
  OpinionAuthorArgs,
} from '@/modules/Opinion/classes/OpinionAuther'
import OpinionCategory, {
  OpinionCategoryArgs,
} from '@/modules/Opinion/classes/OpinionCategory'
import { ROUTES } from '@/routes'
import dayjs, { Dayjs } from 'dayjs'
import { isArray, isObject, isString } from 'lodash-es'
import { Article } from '@/common/lib/graphql/__generated__/graphql'
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'

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
  id?: string
  title?: string
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
  authors?: Array<OpinionAuthorArgs>
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
  authors?: Array<OpinionAuthor>

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
    if (isArray(args.authors)) {
      this.authors = args.authors.map((author) => new OpinionAuthor(author))
    }
  }

  get link() {
    return `${ROUTES.OPINION}/${this.id}`
  }

  static fromDTO(lang: Language, dto: Article) {
    return new Opinion({
      id: dto.id ?? undefined,
      title: dto.title,
      subtitle: dto.subtitle ?? undefined,
      categories: dto.categories?.map((category) => ({
        id: category.id ?? undefined,
        label: category.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? '',
      })),
      date: dto.createdAt,
      tags: dto.tags?.map((tag) => ({
        label: tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? '',
      })),
      resources: dto.sources?.map((source) => ({
        title: source.text ?? '',
        link: source.link ?? '',
      })),
      bannerImage: {
        src: dto.media?.photo?.url ?? '',
        caption: dto.media?.caption ?? '',
      },
      thumbnailImage: {
        src: dto.media?.photo?.url ?? '',
        caption: dto.media?.caption ?? '',
      },
      authors: dto.authors?.map((author) => ({
        name: author.name,
        descriptionHtml: author.bio,
      })),
      contentHtml: slateToHtml(dto.content, {
        ...payloadSlateToHtmlConfig,
        convertLineBreakToBr: true,
      }),
    })
  }

  static formatAuthorsName(authors: Array<OpinionAuthor>) {
    return authors.map((author) => author.name).join(', ')
  }
}
