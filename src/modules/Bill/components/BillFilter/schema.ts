import { z } from 'zod'
import {
  BillCategoryEnum,
  BillPartyEnum,
  BillTypeEnum,
  BillStatusEnum,
} from '@/modules/Bill/components/BillFilter/enums'
import {
  CONGRESS_NUMBER_MIN,
  CURRENT_CONGRESS_NUMBER,
} from '@/common/assets/constants'

export const categorySchema = z.nativeEnum(BillCategoryEnum)

export const partySchema = z.array(z.nativeEnum(BillPartyEnum))

export const typeSchema = z.array(z.nativeEnum(BillTypeEnum))

export const congressSchema = z.array(
  z.number().min(CONGRESS_NUMBER_MIN).max(CURRENT_CONGRESS_NUMBER)
)

export const statusSchema = z.array(z.nativeEnum(BillStatusEnum))

export const sponsorsSchema = z.array(z.number())

export const cosponsorsSchema = z.array(z.number())

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
})

export type BillFilterInput = z.input<typeof billFilterSchema>
export type BillFilterOutput = z.output<typeof billFilterSchema>
export type BillFilterInputKey = keyof BillFilterInput
