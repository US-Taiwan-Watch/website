import CommonUtils from '@/modules/Common/Common.utils'
import { Language } from '@/common/lib/i18n/types'
import {
  OpinionAuthor,
  OpinionAuthorSchema,
  OpinionAuthorUtils,
} from '@/modules/Opinion/business/OpinionAuther'
import {
  OpinionCategorySchema,
  OpinionCategoryUtils,
} from '@/modules/Opinion/business/OpinionCategory'
import { ROUTES } from '@/routes'
import { Article } from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

const OpinionSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  categories: z.array(OpinionCategorySchema).optional(),
  date: z.string().datetime().optional(),
  tags: z.array(z.object({ label: z.string() })).optional(),
  repostSources: z
    .array(z.object({ title: z.string(), link: z.string() }))
    .optional(),
  thumbnailImage: z
    .object({ src: z.string(), caption: z.string().optional() })
    .optional(),
  bannerImage: z
    .object({ src: z.string(), caption: z.string().optional() })
    .optional(),
  // TODO: 確認 Descendant 型別
  content: z.array(z.any()).optional(),
  resources: z
    .array(z.object({ title: z.string(), link: z.string() }))
    .optional(),
  authors: z.array(OpinionAuthorSchema).optional(),
  episodeId: z.string().optional(),
})

export type Opinion = z.infer<typeof OpinionSchema>

export class OpinionUtils {
  /**
   * Article -> Opinion
   */
  static parse(lang: Language, dto: Partial<Article>) {
    return OpinionSchema.parse({
      id: dto.id ?? undefined,
      title: dto.title,
      subtitle: dto.subtitle ?? undefined,
      categories: dto.categories?.map((category) =>
        OpinionCategoryUtils.parse(lang, category)
      ),
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
      authors: dto.authors?.map((author) => OpinionAuthorUtils.parse(author)),
      description: dto.excerpt,
      content: dto.content,
      episodeId: dto.podcast ?? undefined,
    })
  }

  static getLink(opinion: Opinion) {
    return `${ROUTES.OPINION}/${opinion.id}`
  }

  static getCategoryLink(category: NonNullable<Opinion['categories']>[number]) {
    return `${ROUTES.OPINION}/search/${category.id}`
  }

  static formatAuthorsName(authors: Array<OpinionAuthor>) {
    return authors.map((author) => author.name).join(', ')
  }
}
