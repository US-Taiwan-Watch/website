import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
})

// FIXME: Real API 型別
type ApiProject = z.infer<typeof projectSchema>

export type Project = z.infer<typeof projectSchema>

export class ProjectUtils {
  // TODO: 實作 parse
  static parse(lang: Language, dto: ApiProject) {
    return projectSchema.parse({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      image: dto.image,
    })
  }
}
