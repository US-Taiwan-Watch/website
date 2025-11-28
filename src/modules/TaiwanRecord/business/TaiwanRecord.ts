import { isString } from 'lodash-es'
import { z } from 'zod'
import {
  TaiwanRecord_Status as TaiwanRecordStatus,
  TaiwanRecord as TaiwanRecordDTO,
} from '@/common/lib/graphql/__generated__/graphql'

export const LENGTH_CONSTRAINTS = {
  title: 100, // 100 characters
  content: 1000, // 1000 characters
  images: 10, // 10 images
  sources: 10, // 10 sources
} as const

export const taiwanRecordSchema = z.object({
  id: z.string().optional(),
  title: z.string().max(LENGTH_CONSTRAINTS.title).optional(),
  content: z.string().max(LENGTH_CONSTRAINTS.content).optional(),
  images: z.array(z.string()).max(LENGTH_CONSTRAINTS.images).optional(),
  createdAt: z.string().datetime().optional(),
  author: z.string().optional(),
  sources: z.array(z.string()).max(LENGTH_CONSTRAINTS.sources),
  status: z.nativeEnum(TaiwanRecordStatus).optional(),
})

export type TaiwanRecord = z.infer<typeof taiwanRecordSchema>

export const taiwanRecordCreateSchema = taiwanRecordSchema.pick({
  title: true,
  content: true,
  images: true,
  sources: true,
})

export type TaiwanRecordCreateInput = z.input<typeof taiwanRecordCreateSchema>
export type TaiwanRecordCreateOutput = z.infer<typeof taiwanRecordCreateSchema>

export const defaultTaiwanRecordCreate: TaiwanRecordCreateInput = {
  title: '',
  content: '',
  images: [],
  sources: [],
}

export const taiwanRecordUpdateSchema = taiwanRecordSchema.pick({
  id: true,
  title: true,
  content: true,
  images: true,
  sources: true,
})

export type TaiwanRecordUpdateInput = z.input<typeof taiwanRecordUpdateSchema>
export type TaiwanRecordUpdateOutput = z.infer<typeof taiwanRecordUpdateSchema>

export const defaultTaiwanRecordUpdate: TaiwanRecordUpdateOutput = {
  id: '',
  title: '',
  content: '',
  images: [],
  sources: [],
}

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
      sources: dto.sources?.map((source) => source.link).filter(isString) ?? [],
      status: dto.status,
    })
  }

  static isApproved(record: TaiwanRecord) {
    return record.status === TaiwanRecordStatus.Approved
  }
}
