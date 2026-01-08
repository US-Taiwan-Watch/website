import { getClient } from '@/common/lib/graphql/ServerApolloClient'
import {
  QUERY_KETAGALAN_PROJECTS,
  QUERY_USTW_PROJECTS,
} from '@/modules/About/Project/graphql/gql'
import {
  UstwProjectsQuery,
  UstwProjectsQueryVariables,
  KetagalanProjectsQuery,
  KetagalanProjectsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import { ProjectUtils } from '@/modules/About/Project/business/Project'
import { Language } from '@/common/lib/i18n/types'

/**
 * Project API
 *
 * @description Project 的 RSC 端 API 實作
 */
export default class ServerProjectApi {
  static async getUstwProjects(lang: Language) {
    const client = getClient()
    const { data } = await client.query<
      UstwProjectsQuery,
      UstwProjectsQueryVariables
    >({
      query: QUERY_USTW_PROJECTS,
    })

    return (
      data?.UstwProjects?.docs
        ?.filter((project) => !isNull(project))
        .map((project) => ProjectUtils.parse(lang, project)) ?? []
    )
  }

  static async getKetagalanProjects(lang: Language) {
    const client = getClient()
    const { data } = await client.query<
      KetagalanProjectsQuery,
      KetagalanProjectsQueryVariables
    >({
      query: QUERY_KETAGALAN_PROJECTS,
    })

    return (
      data?.KetagalanProjects?.docs
        ?.filter((project) => !isNull(project))
        .map((project) => ProjectUtils.parseKetagalan(lang, project)) ?? []
    )
  }
}
