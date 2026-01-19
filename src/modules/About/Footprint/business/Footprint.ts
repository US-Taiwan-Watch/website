import {
  UstwFootprint as ApiUstwFootprint,
  UstwFootprint_Type as UstwFootprintType,
  KetagalanFootprint as ApiKetagalanFootprint,
  KetagalanFootprint_Type as KetagalanFootprintType,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'

export const footprintSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string(),
  link: z.string(),
  type: z.union([
    z.nativeEnum(UstwFootprintType),
    z.nativeEnum(KetagalanFootprintType),
  ]),
  releaseDate: z.string().datetime(),
})

export type Footprint = z.infer<typeof footprintSchema>

export class FootprintUtils {
  static parse(lang: Language, dto: ApiUstwFootprint) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return footprintSchema.parse({
      id: dto.id,
      title:
        dto.i18n?.[apiLang]?.title || dto.i18n?.[fallbackLang]?.title || '',
      source:
        dto.i18n?.[apiLang]?.source || dto.i18n?.[fallbackLang]?.source || '',
      link: dto.link,
      type: dto.type,
      releaseDate: dto.createdAt,
    })
  }

  static parseKetagalan(lang: Language, dto: ApiKetagalanFootprint) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return footprintSchema.parse({
      id: dto.id,
      title:
        dto.i18n?.[apiLang]?.title || dto.i18n?.[fallbackLang]?.title || '',
      source:
        dto.i18n?.[apiLang]?.source || dto.i18n?.[fallbackLang]?.source || '',
      link: dto.link,
      type: dto.type,
      releaseDate: dto.createdAt,
    })
  }
}
