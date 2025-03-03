import {
  BillsQuery,
  BillsQueryVariables,
  BillTopCosponsorsQuery,
  BillTopCosponsorsQueryVariables,
  BillTopSponsorsQuery,
  BillTopSponsorsQueryVariables,
  BillTopTagsQuery,
  BillTopTagsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isUndefined, isNull } from 'lodash-es'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import {
  QUERY_BILL_TOP_COSPONSORS,
  QUERY_BILL_TOP_SPONSORS,
  QUERY_BILL_TOP_TAGS,
  QUERY_BILLS,
} from '@/modules/Bill/graphql/gql'
import apiConfig from '@/modules/Common/api/ApiConfig'
import TagUtils from '@/modules/Common/Tag.utils'
import { PeopleUtils } from '@/modules/People/business/People'
import { BillUtils } from '@/modules/Bill/business/Bill'

export default class BillApi {
  /**
   * 取得熱門標籤
   * @param limit 限制數量
   * @returns 熱門標籤列表
   */
  static async getPopularTags({ limit = 10 }: { limit?: number }) {
    const { data } = await query<BillTopTagsQuery, BillTopTagsQueryVariables>({
      query: QUERY_BILL_TOP_TAGS,
      variables: {
        limit,
      },
    })
    return (
      data?.BillTopTags?.filter(
        (tag) => !isNull(tag) && !isNull(tag.tag) && !isUndefined(tag.tag)
      ).map((tag) => ({
        billCount: tag!.billCount ?? 0,
        tag: TagUtils.parse(apiConfig.lang, tag!.tag!),
      })) ?? []
    )
  }

  /**
   * 取得提案法案最多的前 5 名議員
   * @param limit 限制數量
   * @returns 提案法案最多的前 5 名議員列表
   */
  static async getTopSponsors({ limit = 10 }: { limit?: number }) {
    const { data: sponsorsData } = await query<
      BillTopSponsorsQuery,
      BillTopSponsorsQueryVariables
    >({
      query: QUERY_BILL_TOP_SPONSORS,
      variables: { limit },
    })

    return (
      sponsorsData?.BillTopSponsors?.filter((doc) => !isNull(doc))
        ?.filter(
          (sponsor) => !isNull(sponsor?.people) && !isUndefined(sponsor?.people)
        )
        .map(({ people, billCount }) => ({
          people: PeopleUtils.parse(apiConfig.lang, people!),
          billCount: billCount ?? 0,
        })) ?? []
    )
  }

  /**
   * 取得共同提案最多的前 5 名議員
   * @param limit 限制數量
   * @returns 共同提案最多的前 5 名議員列表
   */
  static async getTopCosponsors({ limit = 10 }: { limit?: number }) {
    const { data: cosponsorsData } = await query<
      BillTopCosponsorsQuery,
      BillTopCosponsorsQueryVariables
    >({
      query: QUERY_BILL_TOP_COSPONSORS,
      variables: { limit },
    })

    return (
      cosponsorsData?.BillTopCosponsors?.filter((doc) => !isNull(doc))
        ?.filter(
          (cosponsor) =>
            !isNull(cosponsor?.people) && !isUndefined(cosponsor?.people)
        )
        .map(({ people, billCount }) => ({
          people: PeopleUtils.parse(apiConfig.lang, people!),
          billCount: billCount ?? 0,
        })) ?? []
    )
  }

  /**
   * 取得最新提案的法案
   * @param limit 限制數量
   * @returns 最新提案的法案列表
   */
  static async getLatestBills({ limit = 10 }: { limit?: number }) {
    const { data: latestBillsData } = await query<
      BillsQuery,
      BillsQueryVariables
    >({
      query: QUERY_BILLS,
      variables: {
        sort: '-introducedAt.datetime',
        limit,
      },
    })

    return (
      latestBillsData?.Bills?.docs
        ?.filter((bill) => !isNull(bill))
        .map((bill) => BillUtils.parse(apiConfig.lang, bill)) ?? []
    )
  }

  /**
   * 取得熱門提案的法案
   * @param limit 限制數量
   * @returns 熱門提案的法案列表
   *
   * TODO: 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
   */
  static async getPopularBills({ limit = 10 }: { limit?: number }) {
    const { data: popularBillsData } = await query<
      BillsQuery,
      BillsQueryVariables
    >({
      query: QUERY_BILLS,
      variables: {
        sort: '-introducedAt.datetime',
        limit,
      },
    })
    return (
      popularBillsData?.Bills?.docs
        ?.filter((bill) => !isNull(bill))
        .map((bill) => BillUtils.parse(apiConfig.lang, bill)) ?? []
    )
  }
}
