import { UstwFootprint as ApiUstwFootprint } from '@/common/lib/graphql/__generated__/graphql'
import { z } from 'zod'

export enum FootprintType {
  Article = 'article',
  Video = 'video',
}

export const footprintSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string(),
  type: z.nativeEnum(FootprintType),
  releaseDate: z.string().datetime(),
})

export type Footprint = z.infer<typeof footprintSchema>

export class FootprintUtils {
  static parse(dto: ApiUstwFootprint) {
    return footprintSchema.parse({
      id: dto.id,
      title: dto.title,
      source: dto.source,
      type: dto.type,
      releaseDate: dto.createdAt,
    })
  }
}
