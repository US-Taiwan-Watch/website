import { Tag as ApiTag } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'

export const tagSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Tag = z.infer<typeof tagSchema>

export default class TagUtils {
  static parse(lang: Language, dto: ApiTag) {
    return tagSchema.parse({
      id: dto.id ?? undefined,
      name: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? undefined,
    })
  }
}
