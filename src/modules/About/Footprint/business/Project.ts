import { Language } from '@/common/lib/i18n/types'
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

// FIXME: Real API 型別
type ApiFootprint = z.infer<typeof footprintSchema>

export type Footprint = z.infer<typeof footprintSchema>

export class FootprintUtils {
  // TODO: 實作 parse
  static parse(lang: Language, dto: ApiFootprint) {
    return footprintSchema.parse({
      id: dto.id,
      title: dto.title,
      source: dto.source,
      type: dto.type,
      releaseDate: dto.releaseDate,
    })
  }
}
