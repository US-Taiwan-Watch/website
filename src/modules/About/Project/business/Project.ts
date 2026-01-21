import {
  KetagalanProject as ApiKetagalanProject,
  UstwProject as ApiUstwProject,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'
import CommonUtils from '@/modules/Common/Common.utils'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export class ProjectUtils {
  static parse(lang: Language, dto: ApiUstwProject) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return projectSchema.parse({
      id: dto.id,
      title:
        dto.i18n?.[apiLang]?.title || dto.i18n?.[fallbackLang]?.title || '',
      description:
        dto.i18n?.[apiLang]?.description ||
        dto.i18n?.[fallbackLang]?.description ||
        '',
      image: dto.photo?.url ?? '',
    })
  }

  static parseKetagalan(lang: Language, dto: ApiKetagalanProject) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return projectSchema.parse({
      id: dto.id,
      title:
        dto.i18n?.[apiLang]?.title || dto.i18n?.[fallbackLang]?.title || '',
      description:
        dto.i18n?.[apiLang]?.description ||
        dto.i18n?.[fallbackLang]?.description ||
        '',
      image: dto.photo?.url ?? '',
    })
  }
}
