import {
  PeoplesQueryVariables,
  PeoplesQuery,
} from '@/common/lib/graphql/__generated__/graphql'

import { query } from '@/common/lib/graphql/ServerApolloClient'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { PeopleUtils } from '@/modules/People/business/People'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'
import { isNull } from 'lodash-es'

export default class PeopleApi {
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
}
