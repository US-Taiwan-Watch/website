import { CategoriesArticle } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { ROUTES } from '@/routes'
import { z } from 'zod'

export const OpinionCategorySchema = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
})

export type OpinionCategory = z.infer<typeof OpinionCategorySchema>

export class OpinionCategoryUtils {
  static getLink(id: string) {
    return `${ROUTES.OPINION}/search/${id}`
  }

  /**
   * CategoriesArticle -> OpinionCategory
   */
  static parse(lang: Language, dto: CategoriesArticle) {
    return OpinionCategorySchema.parse({
      id: dto.id ?? undefined,
      label: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}
