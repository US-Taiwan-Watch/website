import { isString } from 'lodash-es'
import { z } from 'zod'
import {
  TaiwanRecord_Status as TaiwanRecordStatus,
  TaiwanRecord as TaiwanRecordDTO,
} from '@/common/lib/graphql/__generated__/graphql'

export interface Sources {
  links: Array<string>
}
const sourcesSchema = z.object({
  from: z.string(),
  links: z.array(z.string()),
})
const imagesSchema = z.array(z.string())

export const taiwanRecordSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  content: z.string().optional(),
  images: imagesSchema.optional(),
  createdAt: z.string().datetime().optional(),
  author: z.string().optional(),
  sources: sourcesSchema.optional(),
  status: z.nativeEnum(TaiwanRecordStatus).optional(),
})

export type TaiwanRecord = z.infer<typeof taiwanRecordSchema>

export class TaiwanRecordUtils {
  static parse(dto: TaiwanRecordDTO) {
    return taiwanRecordSchema.parse({
      id: dto.id ?? undefined,
      title: dto.title ?? '',
      content: dto.description ?? '',
      images:
        dto.photos?.map((photo) => photo.photo?.url).filter(isString) ?? [],
      createdAt: dto.createdAt ?? '',
      author: dto.author?.fullName ?? '',
      sources: {
        from: '',
        links: dto.sources?.map((source) => source.link).filter(isString) ?? [],
      },
      status: dto.status,
    })
  }

  static isApproved(record: TaiwanRecord) {
    return record.status === TaiwanRecordStatus.Approved
  }
}
