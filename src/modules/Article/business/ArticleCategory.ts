import {
  CategoriesArticle,
  CategoriesKetagalan,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

export const articleCategorySchema = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
})

export type ArticleCategory = z.infer<typeof articleCategorySchema>

export class ArticleCategoryUtils {
  static getLink(id: string) {
    const { resolveRouteUrl } = getURouterServer()
    return resolveRouteUrl({
      name: RouteName.ArticleCategory,
      params: { categoryId: id },
    })
  }

  /**
   * CategoriesArticle -> ArticleCategory
   */
  static parse(lang: Language, dto: CategoriesArticle | CategoriesKetagalan) {
    return articleCategorySchema.parse({
      id: dto.id ?? undefined,
      label: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}
