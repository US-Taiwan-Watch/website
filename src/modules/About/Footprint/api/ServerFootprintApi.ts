import { query } from '@/common/lib/graphql/ServerApolloClient'
import { QUERY_USTW_FOOTPRINTS } from '@/modules/About/Footprint/graphql/gql'
import {
  UstwFootprintsQuery,
  UstwFootprintsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { FootprintUtils } from '@/modules/About/Footprint/business/Footprint'
import { isNull } from 'lodash-es'
import apiConfig from '@/modules/Common/api/ApiConfig'

/**
 * Footprint API
 *
 * @description Footprint 的 RSC 端 API 實作
 */
export default class ServerFootprintApi {
  static async getUstwFootprints() {
    const { data } = await query<
      UstwFootprintsQuery,
      UstwFootprintsQueryVariables
    >({
      query: QUERY_USTW_FOOTPRINTS,
    })

    return (
      data?.UstwFootprints?.docs
        ?.filter((footprint) => !isNull(footprint))
        .map((footprint) => FootprintUtils.parse(apiConfig.lang, footprint)) ??
      []
    )
  }
}
