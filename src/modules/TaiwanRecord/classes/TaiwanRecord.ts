import dayjs, { Dayjs } from 'dayjs'
import { isString } from 'lodash-es'
import { z } from 'zod'
import {
  TaiwanRecord_Status as TaiwanRecordStatus,
  TaiwanRecord as TaiwanRecordDTO,
} from '@/common/lib/graphql/__generated__/graphql'

interface SourcesArgs {
  /** 來源 */
  from: string
  /** 連結 */
  links: Array<string>
}
export interface Sources {
  links: Array<string>
}
const sourcesSchema = z.object({
  from: z.string(),
  links: z.array(z.string()),
})
const imagesSchema = z.array(z.string())

interface TaiwanRecordArgs {
  /** ID */
  id?: string
  /** 標題 */
  title?: string
  /** 內容 */
  content?: string
  /** 圖片 */
  images?: Array<string>
  /** 建立時間 */
  createdAt?: string
  /** 作者 */
  author?: string
  /** 來源 */
  sources?: SourcesArgs
  /** 狀態 */
  status?: TaiwanRecordStatus
}

export default class TaiwanRecord {
  id?: string
  title?: string
  content?: string
  images?: Array<string>
  createdAt?: Dayjs
  author?: string
  sources?: Sources
  status?: TaiwanRecordStatus

  constructor(args: TaiwanRecordArgs) {
    if (isString(args.id)) this.id = args.id
    if (isString(args.title)) this.title = args.title
    if (isString(args.content)) this.content = args.content
    if (args.images && imagesSchema.safeParse(args.images).success)
      this.images = args.images
    if (isString(args.createdAt) && dayjs(args.createdAt).isValid())
      this.createdAt = dayjs(args.createdAt)
    if (isString(args.author)) this.author = args.author
    if (args.sources && sourcesSchema.safeParse(args.sources).success)
      this.sources = args.sources
    this.status = args.status
  }

  static fromDTO(dto: TaiwanRecordDTO) {
    return new TaiwanRecord({
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
