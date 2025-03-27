import { z } from 'zod'
import {
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
  BillSorterEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import { CongressUtils } from '@/common/business/Congress'

export const categorySchema = z.array(z.string())

export const partySchema = z.array(z.nativeEnum(BillPartyEnum))

export const typeSchema = z.array(z.nativeEnum(BillTypeEnum))

export const congressSchema = z.array(
  z
    .number()
    .min(CongressUtils.minCongressNumber())
    .max(CongressUtils.getCurrentCongressNumber())
)

export const statusSchema = z.array(z.nativeEnum(BillStatusEnum))

export const sponsorsSchema = z.array(z.string())

export const cosponsorsSchema = z.array(z.string())

export const tagSchema = z.array(z.string())

export const sorterSchema = z.nativeEnum(BillSorterEnum)

export const billFilterSchema = z.object({
  /**
   * 空字串為預設值，但 Output 不接受空字串
   */
  category: categorySchema.optional(),
  party: partySchema.optional(),
  type: typeSchema.optional(),
  congress: congressSchema.optional(),
  status: statusSchema.optional(),
  sponsors: sponsorsSchema.optional(),
  cosponsors: cosponsorsSchema.optional(),
  tag: tagSchema.optional(),
  sorter: sorterSchema.optional(),
})

export type BillFilterInput = z.input<typeof billFilterSchema>
export type BillFilterOutput = z.output<typeof billFilterSchema>
export type BillFilterInputKey = keyof BillFilterInput

export const defaultBillFilterInput: BillFilterInput = {
  category: [],
  party: [],
  type: [],
  congress: [],
  status: [],
  sponsors: [],
  cosponsors: [],
  tag: [],
  sorter: BillSorterEnum.LatestAction,
}
