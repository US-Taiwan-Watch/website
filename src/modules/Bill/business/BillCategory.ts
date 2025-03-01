import { z } from 'zod'
import { Language } from '@/common/lib/i18n/types'
import { CategoriesBill } from '@/common/lib/graphql/__generated__/graphql'
import CommonUtils from '@/modules/Common/Common.utils'

export const billCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type BillCategory = z.infer<typeof billCategorySchema>

export class BillCategoryUtils {
  static parse(lang: Language, dto: CategoriesBill) {
    return billCategorySchema.parse({
      id: dto.id ?? undefined,
      name: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}
