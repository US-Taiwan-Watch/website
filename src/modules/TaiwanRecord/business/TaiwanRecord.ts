import { isString } from 'lodash-es'
import { z } from 'zod'
import { TaiwanRecord as TaiwanRecordDTO } from '@/common/lib/graphql/__generated__/graphql'

export enum TaiwanRecordStatus {
  InReview = 'inReview',
  Drafted = 'drafted',
  Published = 'published',
  Deleted = 'deleted',
}

/**
 * 最多10張圖片
 */
export const MAX_IMAGE_COUNT = 10

export const taiwanRecordSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
  images: z
    .array(
      z.object({
        id: z.string(),
        url: z.string().url(),
      })
    )
    .max(MAX_IMAGE_COUNT),
  createdAt: z.string().datetime(),
  author: z.string(),
  sources: z.array(z.string().url()),
  status: z.nativeEnum(TaiwanRecordStatus),
  peopleId: z.string(),
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
  peopleId: true,
})

export type TaiwanRecordUpdateInput = z.input<typeof taiwanRecordUpdateSchema>
export type TaiwanRecordUpdateOutput = z.infer<typeof taiwanRecordUpdateSchema>

export const defaultTaiwanRecordUpdate: TaiwanRecordUpdateOutput = {
  id: '',
  title: '',
  content: '',
  images: [],
  sources: [],
  peopleId: '',
}

export class TaiwanRecordUtils {
  static parse(dto: TaiwanRecordDTO) {
    return taiwanRecordSchema.parse({
      id: dto.id ?? undefined,
      title: dto.title ?? '',
      content: dto.description ?? '',
      images:
        dto.photos
          ?.map((photo) => ({
            id: photo.id,
            url: photo.photo?.url ?? '',
          }))
          .filter((photo) => isString(photo.id) && isString(photo.url)) ?? [],
      sources: dto.sources?.map((source) => source.link).filter(isString) ?? [],
      status: dto.status,
      createdAt: dto.createdAt ?? '',
      author: dto.author?.fullName ?? '',
      peopleId: dto.people?.id ?? '',
    })
  }

  static isPublished(record: TaiwanRecord) {
    return record.status === TaiwanRecordStatus.Published
  }

  static isReadonly(record: TaiwanRecord) {
    return (
      record.status === TaiwanRecordStatus.InReview ||
      record.status === TaiwanRecordStatus.Deleted
    )
  }
}
