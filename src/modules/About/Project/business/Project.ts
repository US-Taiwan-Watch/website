import { UstwProject as ApiUstwProject } from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
})

export type Project = z.infer<typeof projectSchema>

export class ProjectUtils {
  static parse(dto: ApiUstwProject) {
    return projectSchema.parse({
      id: dto.id,
      title: dto.title,
      description: dto.description,
      image: dto.photo?.url ?? '',
    })
  }
}
