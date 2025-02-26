import { Author } from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

export const OpinionAuthorSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export type OpinionAuthor = z.infer<typeof OpinionAuthorSchema>

export class OpinionAuthorUtils {
  /**
   * Author -> OpinionAuthor
   */
  static parse(dto: Author) {
    return OpinionAuthorSchema.parse({
      name: dto.name,
      description: dto.bio,
    })
  }
}
