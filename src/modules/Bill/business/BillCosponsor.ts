import { Party } from '@/common/enums/Party'
import { Bill_Cosponsors as BillCosponsorsDto } from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { peopleSchema, PeopleUtils } from '@/modules/People/business/People'
import { z } from 'zod'

export const billCosponsorSchema = z.object({
  people: peopleSchema,
  constituency: z.string(),
  cosponsoredAt: z.string(),
  party: z.nativeEnum(Party).optional(),
})

export type BillCosponsor = z.infer<typeof billCosponsorSchema>

export class BillCosponsorUtils {
  static parse(lang: Language, dto: BillCosponsorsDto) {
    return billCosponsorSchema.parse({
      people: dto.people ? PeopleUtils.parse(lang, dto.people) : undefined,
      constituency: dto.constituency ?? '',
      cosponsoredAt: dto.cosponsoredAt?.datetime ?? '',
      party: dto.party,
    })
  }
}
