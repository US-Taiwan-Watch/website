import {
  PeoplesQueryVariables,
  PeoplesQuery,
  PeopleQuery,
  PeopleQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'

import { query } from '@/common/lib/graphql/ServerApolloClient'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { PeopleUtils } from '@/modules/People/business/People'
import { QUERY_PEOPLE, QUERY_PEOPLES } from '@/modules/People/graphql/gql'
import { isNull } from 'lodash-es'

export default class PeopleApi {
  /**
   * 取得熱門人物
   * @param limit 限制數量
   * @returns 熱門人物列表
   */
  static async getPopularPeople({ limit = 10 }: { limit?: number }) {
    const { data } = await query<PeoplesQuery, PeoplesQueryVariables>({
      query: QUERY_PEOPLES,
      variables: {
        limit,
        sort: '-viewCount',
      },
    })

    return (
      data?.Peoples?.docs
        ?.filter((people) => !isNull(people))
        .map((people) => PeopleUtils.parse(apiConfig.lang, people)) ?? []
    )
  }

  /**
   * 取得人物
   * @param id 人物ID
   * @returns 人物
   */
  static async getPeople({ id }: { id: string }) {
    const { data } = await query<PeopleQuery, PeopleQueryVariables>({
      query: QUERY_PEOPLE,
      variables: { id },
    })

    if (!data?.People) return null

    return PeopleUtils.parse(apiConfig.lang, data.People)
  }
}
