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
import {
  UstwArticle as ApiUstwArticle,
  KetagalanArticle as ApiKetagalanArticle,
} from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'
import type { Descendant } from '@/modules/Article/utils/slateSerializer'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

export enum ArticleType {
  Article = 'article',
  Ketagalan = 'ketagalan',
}

export const articleSchema = z.object({
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
  content: z.custom<Descendant[]>((val) => Array.isArray(val)).optional(),
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
    dto: Partial<ApiUstwArticle | ApiKetagalanArticle>,
    articleType: ArticleType
  ) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    const result = articleSchema.safeParse({
      type: articleType,
      id: dto.id ?? undefined,
      title: dto.title,
      subtitle: dto.subtitle ?? undefined,
      categories: dto.categories?.map((category) =>
        ArticleCategoryUtils.parse(lang, category)
      ),
      date: dto.createdAt,
      tags: dto.tags?.map((tag) => ({
        label:
          tag.i18n?.[apiLang]?.name || tag.i18n?.[fallbackLang]?.name || '',
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

    if (!result.success) {
      console.error('Article data validation failed:', result.error, dto)
      throw new Error(`Invalid article data structure: ${result.error.message}`)
    }

    return result.data
  }

  static getLinkRoute(articleType: ArticleType) {
    const { resolveRouteUrl } = getURouterServer()
    return articleType === ArticleType.Ketagalan
      ? resolveRouteUrl({ name: RouteName.KetagalanMedia })
      : resolveRouteUrl({ name: RouteName.Article })
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
