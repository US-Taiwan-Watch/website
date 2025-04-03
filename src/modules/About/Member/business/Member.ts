import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'

export const memberSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
})

export const memberGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  members: z.array(memberSchema),
})

// FIXME: Real API 型別
type ApiMember = z.infer<typeof memberSchema>
type ApiMemberGroup = z.infer<typeof memberGroupSchema>

export type Member = z.infer<typeof memberSchema>
export type MemberGroup = z.infer<typeof memberGroupSchema>

export class MemberUtils {
  // TODO: 實作 parse
  static parseMember(lang: Language, dto: ApiMember) {
    return memberSchema.parse({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      image: dto.image,
    })
  }

  static parseMemberGroup(lang: Language, dto: ApiMemberGroup) {
    return memberGroupSchema.parse({
      id: dto.id,
      name: dto.name,
      members: dto.members.map((member) => this.parseMember(lang, member)),
    })
  }
}
