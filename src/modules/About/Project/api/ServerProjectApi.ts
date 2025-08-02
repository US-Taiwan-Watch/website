import { query } from '@/common/lib/graphql/ServerApolloClient'
import { QUERY_USTW_PROJECTS } from '@/modules/About/Project/graphql/gql'
import {
  UstwProjectsQuery,
  UstwProjectsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull } from 'lodash-es'
import apiConfig from '@/modules/Common/api/ApiConfig'
import { ProjectUtils } from '@/modules/About/Project/business/Project'

/**
 * Project API
 *
 * @description Project 的 RSC 端 API 實作
 */
export default class ServerProjectApi {
  static async getUstwProjects() {
    const { data } = await query<UstwProjectsQuery, UstwProjectsQueryVariables>(
      {
        query: QUERY_USTW_PROJECTS,
      }
    )

    return (
      data?.UstwProjects?.docs
        ?.filter((project) => !isNull(project))
        .map((project) => ProjectUtils.parse(apiConfig.lang, project)) ?? []
    )
  }
}
