import {
  UstwFootprint as ApiUstwFootprint,
  UstwFootprint_Type as UstwFootprintType,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'

export const footprintSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string(),
  link: z.string(),
  type: z.nativeEnum(UstwFootprintType),
  releaseDate: z.string().datetime(),
})

export type Footprint = z.infer<typeof footprintSchema>

export class FootprintUtils {
  static parse(lang: Language, dto: ApiUstwFootprint) {
    return footprintSchema.parse({
      id: dto.id,
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? '',
      source: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.source ?? '',
      link: dto.link,
      type: dto.type,
      releaseDate: dto.createdAt,
    })
  }
}
