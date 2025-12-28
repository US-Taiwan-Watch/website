import { Party } from '@/common/enums/Party'
import { Bill_Sponsor as BillSponsorDto } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { peopleSchema, PeopleUtils } from '@/modules/People/business/People'
import { z } from 'zod'

export const billSponsorSchema = z.object({
  people: peopleSchema,
  party: z.nativeEnum(Party).optional(),
})

export type BillSponsor = z.infer<typeof billSponsorSchema>

export class BillSponsorUtils {
  static parse(lang: Language, dto: BillSponsorDto) {
    return billSponsorSchema.parse({
      people: dto.people ? PeopleUtils.parse(lang, dto.people) : undefined,
      party: dto.party,
    })
  }
}
