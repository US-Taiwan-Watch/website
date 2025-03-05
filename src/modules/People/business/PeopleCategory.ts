import { z } from 'zod'
import { Language } from '@/common/lib/i18n/types'
import { CategoriesPerson } from '@/common/lib/graphql/__generated__/graphql'
import CommonUtils from '@/modules/Common/Common.utils'
import { PeopleCategoryEnum } from '@/modules/People/components/PeopleFilter/enums'

export const peopleCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.nativeEnum(PeopleCategoryEnum),
})

export type PeopleCategory = z.infer<typeof peopleCategorySchema>

export class PeopleCategoryUtils {
  static parse(lang: Language, dto: CategoriesPerson) {
    return peopleCategorySchema.parse({
      id: dto.id ?? undefined,
      name: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
      /**
       * 透過 `type` 與前端的 `PeopleCategoryEnum` 對應
       * @see {@link PeopleCategoryEnum}
       */
      type: dto.nameEn,
    })
  }
}
