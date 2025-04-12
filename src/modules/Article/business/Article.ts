import CommonUtils from '@/modules/Common/Common.utils'
import { Language } from '@/common/lib/i18n/types'
import {
  ArticleAuthor,
  ArticleAuthorSchema,
  ArticleAuthorUtils,
} from '@/modules/Article/business/ArticleAuther'
import {
  articleCategorySchema,
  ArticleCategoryUtils,
} from '@/modules/Article/business/ArticleCategory'
import { ROUTES } from '@/routes'
import { Article as ApiArticle } from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

export enum ArticleType {
  Article = 'article',
  Ketagalan = 'ketagalan',
}

const articleSchema = z.object({
  type: z.nativeEnum(ArticleType),
  id: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  categories: z.array(articleCategorySchema).optional(),
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
  authors: z.array(ArticleAuthorSchema).optional(),
  episodeId: z.string().optional(),
})

export type Article = z.infer<typeof articleSchema>

export class ArticleUtils {
  /**
   * 解析文章
   * @param lang 語言
   * @param dto 文章資料
   * @returns 文章
   */
  static parse(
    lang: Language,
    dto: Partial<ApiArticle>,
    articleType: ArticleType
  ) {
    return articleSchema.parse({
      type: articleType,
      id: dto.id ?? undefined,
      title: dto.title,
      subtitle: dto.subtitle ?? undefined,
      categories: dto.categories?.map((category) =>
        ArticleCategoryUtils.parse(lang, category)
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
      authors: dto.authors?.map((author) => ArticleAuthorUtils.parse(author)),
      description: dto.excerpt,
      content: dto.content,
      episodeId: dto.podcast ?? undefined,
    })
  }

  static getLinkRoute(articleType: ArticleType) {
    return articleType === ArticleType.Ketagalan
      ? ROUTES.KETAGALAN_MEDIA
      : ROUTES.ARTICLE
  }

  static getLink(articleType: ArticleType, articleId: Article['id']) {
    if (!articleId) return '#'
    return `${ArticleUtils.getLinkRoute(articleType)}/${articleId}`
  }

  static getCategoryLink(
    articleType: ArticleType,
    category: NonNullable<Article['categories']>[number]
  ) {
    return `${ArticleUtils.getLinkRoute(articleType)}/search/${category.id}`
  }

  static formatAuthorsName(authors: Array<ArticleAuthor>) {
    return authors.map((author) => author.name).join(', ')
  }
}
