import {
  PeoplesQueryVariables,
  PeoplesQuery,
  PeopleQuery,
  PeopleQueryVariables,
  PeopleIdsQuery,
  PeopleIdsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'

import { getClient } from '@/common/lib/graphql/ServerApolloClient'
import { FetchOptions } from '@/common/lib/graphql/revalidate'
import { PeopleUtils } from '@/modules/People/business/People'
import {
  QUERY_PEOPLE,
  QUERY_PEOPLES,
  QUERY_PEOPLE_IDS,
} from '@/modules/People/graphql/gql'
import { isNull, isUndefined } from 'lodash-es'
import { Language } from '@/common/lib/i18n/types'

/**
 * People API
 *
 * @description People 的 RSC 端 API 實作
 */
export default class ServerPeopleApi {
  /**
   * 取得熱門人物
   * @param lang 語言
   * @param limit 限制數量
   * @returns 熱門人物列表
   */
  static async getPopularPeople(
    lang: Language,
    { limit = 10 }: { limit?: number }
  ) {
    const client = getClient()
    const { data } = await client.query<PeoplesQuery, PeoplesQueryVariables>({
      query: QUERY_PEOPLES,
      variables: {
        limit,
        sort: '-viewCount',
      },
      context: FetchOptions.realTime,
    })

    return (
      data?.Peoples?.docs
        ?.filter((people) => !isNull(people))
        .map((people) => PeopleUtils.parse(lang, people)) ?? []
    )
  }

  /**
   * 取得人物
   * @param lang 語言
   * @param id 人物ID
   * @returns 人物
   */
  static async getPeople(lang: Language, { id }: { id: string }) {
    const client = getClient()
    const { data } = await client.query<PeopleQuery, PeopleQueryVariables>({
      query: QUERY_PEOPLE,
      variables: { id },
      context: FetchOptions.dynamic,
    })

    if (!data?.People) return null

    return PeopleUtils.parse(lang, data.People)
  }

  /**
   * 取得人物 IDs 和更新時間
   * @returns 人物 IDs 和 updatedAt 列表
   */
  static async getPeopleIds(): Promise<{ id: string; updatedAt: string }[]> {
    try {
      const client = getClient()
      const { data } = await client.query<
        PeopleIdsQuery,
        PeopleIdsQueryVariables
      >({
        query: QUERY_PEOPLE_IDS,
        context: FetchOptions.stable,
      })

      return (
        (data?.Peoples?.docs
          ?.filter((people) => !isNull(people))
          .map((people) => ({
            id: people!.id,
            updatedAt: people!.updatedAt,
          }))
          .filter(
            (people) => !isNull(people.id) && !isUndefined(people.id)
          ) as {
          id: string
          updatedAt: string
        }[]) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch people IDs:', error)
      return []
    }
  }
}
