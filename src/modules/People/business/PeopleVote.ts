import { Party } from '@/common/enums/Party'
import { Language } from '@/common/lib/i18n/types'
import { billSchema, BillUtils } from '@/modules/Bill/business/Bill'
import CommonUtils from '@/modules/Common/Common.utils'
import { z } from 'zod'
import { People as ApiPeople } from '@/common/lib/graphql/__generated__/graphql'

const peopleVoteSchema = z.object({
  id: z.string().optional(),
  party: z.nativeEnum(Party).optional(),
  stance: z.enum(['noes', 'ayes', 'present', 'notVoting']).optional(),
  vote: z
    .object({
      bill: billSchema.optional(),
      status: z.enum(['passed', 'failed']).optional(),
    })
    .optional(),
})

export type PeopleVote = z.infer<typeof peopleVoteSchema>

export class PeopleVoteUtils {
  static parse(lang: Language, dto: NonNullable<ApiPeople['votes']>[number]) {
    return peopleVoteSchema.parse({
      id: dto.id ?? undefined,
      party: CommonUtils.parseAPIParty(dto.party),
      stance: dto.stance,
      vote: {
        bill: dto.vote?.bill ? BillUtils.parse(lang, dto.vote.bill) : undefined,
        status: dto.vote?.status,
      },
    })
  }
}
