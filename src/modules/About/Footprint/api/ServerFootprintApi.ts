import { query } from '@/common/lib/graphql/ServerApolloClient'
import {
  QUERY_KETAGALAN_FOOTPRINTS,
  QUERY_USTW_FOOTPRINTS,
} from '@/modules/About/Footprint/graphql/gql'
import {
  UstwFootprintsQuery,
  UstwFootprintsQueryVariables,
  KetagalanFootprintsQuery,
  KetagalanFootprintsQueryVariables,
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

  static async getKetagalanFootprints() {
    const { data } = await query<
      KetagalanFootprintsQuery,
      KetagalanFootprintsQueryVariables
    >({
      query: QUERY_KETAGALAN_FOOTPRINTS,
    })

    return (
      data?.KetagalanFootprints?.docs
        ?.filter((footprint) => !isNull(footprint))
        .map((footprint) =>
          FootprintUtils.parseKetagalan(apiConfig.lang, footprint)
        ) ?? []
    )
  }
}
