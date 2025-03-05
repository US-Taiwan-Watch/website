import { CategoriesArticle } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { ROUTES } from '@/routes'
import { z } from 'zod'

export const articleCategorySchema = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
})

export type ArticleCategory = z.infer<typeof articleCategorySchema>

export class ArticleCategoryUtils {
  static getLink(id: string) {
    return `${ROUTES.ARTICLE}/search/${id}`
  }

  /**
   * CategoriesArticle -> ArticleCategory
   */
  static parse(lang: Language, dto: CategoriesArticle) {
    return articleCategorySchema.parse({
      id: dto.id ?? undefined,
      label: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}
