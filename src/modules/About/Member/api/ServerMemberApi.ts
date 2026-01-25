import { getClient } from '@/common/lib/graphql/ServerApolloClient'
import { FetchOptions } from '@/common/lib/graphql/revalidate'
import {
  QUERY_KETAGALAN_MEMBERS,
  QUERY_USTW_MEMBERS,
} from '@/modules/About/Member/graphql/gql'
import {
  UstwMembersQuery,
  UstwMembersQueryVariables,
  KetagalanMembersQuery,
  KetagalanMembersQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { MemberUtils } from '@/modules/About/Member/business/Member'
import { Language } from '@/common/lib/i18n/types'

/**
 * Member API
 *
 * @description Member 的 RSC 端 API 實作
 */
export default class ServerMemberApi {
  static async getUstwMembers(lang: Language) {
    const client = getClient()
    const { data } = await client.query<
      UstwMembersQuery,
      UstwMembersQueryVariables
    >({
      query: QUERY_USTW_MEMBERS,
      context: FetchOptions.static,
    })

    return (
      data?.UstwMembers?.docs
        ?.filter((member) => !isNull(member))
        .map((member) => MemberUtils.parseMember(lang, member)) ?? []
    )
  }

  static async getKetagalanMembers(lang: Language) {
    const client = getClient()
    const { data } = await client.query<
      KetagalanMembersQuery,
      KetagalanMembersQueryVariables
    >({
      query: QUERY_KETAGALAN_MEMBERS,
      context: FetchOptions.static,
    })

    return (
      data?.KetagalanMembers?.docs
        ?.filter((member) => !isNull(member))
        .map((member) => MemberUtils.parseKetagalanMember(lang, member)) ?? []
    )
  }
}
