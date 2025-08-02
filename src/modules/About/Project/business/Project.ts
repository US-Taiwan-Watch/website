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
    return projectSchema.parse({
      id: dto.id,
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? '',
      description:
        dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.description ?? '',
      image: dto.photo?.url ?? '',
    })
  }

  static parseKetagalan(lang: Language, dto: ApiKetagalanProject) {
    return projectSchema.parse({
      id: dto.id,
      title: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.title ?? '',
      description:
        dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.description ?? '',
      image: dto.photo?.url ?? '',
    })
  }
}
