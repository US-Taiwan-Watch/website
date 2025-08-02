import {
  UstwMember as ApiUstwMember,
  UstwMember_Type as UstwMemberType,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { z } from 'zod'
import CommonUtils from '@/modules/Common/Common.utils'

export const memberSchema = z.object({
  type: z.nativeEnum(UstwMemberType),
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
})

export const memberGroupSchema = z.object({
  type: z.nativeEnum(UstwMemberType),
  members: z.array(memberSchema),
})

export type Member = z.infer<typeof memberSchema>
export type MemberGroup = z.infer<typeof memberGroupSchema>

export class MemberUtils {
  static parseMember(lang: Language, dto: ApiUstwMember) {
    return memberSchema.parse({
      id: dto.id,
      name: dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? '',
      description:
        dto.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.description ?? '',
      image: dto.photo?.url ?? '',
      type: dto.type,
    })
  }

  static parseMemberGroup(members: Member[]) {
    const membersMap: Record<UstwMemberType, Member[]> = {
      boardOfDirector: [],
      member: [],
    }
    members.forEach((member) => {
      if (!membersMap[member.type]) {
        membersMap[member.type] = []
      }
      membersMap[member.type].push(member)
    })
    return Object.entries(membersMap).map(([type, members]) =>
      memberGroupSchema.parse({
        type: type as UstwMemberType,
        members,
      })
    )
  }
}
