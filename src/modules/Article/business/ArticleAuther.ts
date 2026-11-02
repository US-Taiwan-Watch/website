import {
  UstwAuthor,
  KetagalanAuthor,
} from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

export const ArticleAuthorSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export type ArticleAuthor = z.infer<typeof ArticleAuthorSchema>

export class ArticleAuthorUtils {
  /**
   * Author -> ArticleAuthor
   */
  static parse(dto: UstwAuthor | KetagalanAuthor) {
    return ArticleAuthorSchema.parse({
      name: dto.name,
      description: dto.bio,
    })
  }
}
