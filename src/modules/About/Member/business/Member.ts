import {
  UstwMember as ApiUstwMember,
  UstwMember_Type as UstwMemberType,
  KetagalanMember as ApiKetagalanMember,
  KetagalanMember_Type as KetagalanMemberType,
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
  type: z.union([
    z.nativeEnum(UstwMemberType),
    z.nativeEnum(KetagalanMemberType),
  ]),
  members: z.array(memberSchema),
})

export type Member = z.infer<typeof memberSchema>
export type MemberGroup = z.infer<typeof memberGroupSchema>

export class MemberUtils {
  static parseMember(lang: Language, dto: ApiUstwMember) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return memberSchema.parse({
      id: dto.id,
      name: dto.i18n?.[apiLang]?.name || dto.i18n?.[fallbackLang]?.name || '',
      description:
        dto.i18n?.[apiLang]?.description ||
        dto.i18n?.[fallbackLang]?.description ||
        '',
      image: dto.photo?.url ?? '',
      type: dto.type,
    })
  }

  static parseKetagalanMember(lang: Language, dto: ApiKetagalanMember) {
    const [apiLang, fallbackLang] = CommonUtils.parseApiI18nKey(lang)
    return memberSchema.parse({
      id: dto.id,
      name: dto.i18n?.[apiLang]?.name || dto.i18n?.[fallbackLang]?.name || '',
      description:
        dto.i18n?.[apiLang]?.description ||
        dto.i18n?.[fallbackLang]?.description ||
        '',
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
