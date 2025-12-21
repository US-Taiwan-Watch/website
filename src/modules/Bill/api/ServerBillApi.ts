import {
  BillQuery,
  BillQueryVariables,
  BillsQuery,
  BillsQueryVariables,
  BillTopCosponsorsQuery,
  BillTopCosponsorsQueryVariables,
  BillTopSponsorsQuery,
  BillTopSponsorsQueryVariables,
  BillTopTagsQuery,
  BillTopTagsQueryVariables,
  BillIdsQuery,
  BillIdsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isUndefined, isNull } from 'lodash-es'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import {
  QUERY_BILL,
  QUERY_BILL_TOP_COSPONSORS,
  QUERY_BILL_TOP_SPONSORS,
  QUERY_BILL_TOP_TAGS,
  QUERY_BILLS,
  QUERY_BILL_IDS,
} from '@/modules/Bill/graphql/gql'
import apiConfig from '@/modules/Common/api/ApiConfig'
import TagUtils from '@/modules/Common/business/Tag'
import { PeopleUtils } from '@/modules/People/business/People'
import { BillUtils } from '@/modules/Bill/business/Bill'

/**
 * Bill API
 *
 * @description Bill 的 RSC 端 API 實作
 */
export default class ServerBillApi {
  /**
   * 取得首頁精選法案
   * @param limit 限制數量
   * @returns 首頁精選法案列表
   */
  static async getHomeFeaturedBills({ limit = 10 }: { limit?: number }) {
    try {
      const { data } = await query<BillsQuery, BillsQueryVariables>({
        query: QUERY_BILLS,
        variables: {
          limit,
          where: {
            isFeatured: {
              equals: true,
            },
          },
        },
      })

      return (
        data?.Bills?.docs
          ?.filter((bill) => !isNull(bill))
          .map((bill) => BillUtils.parse(apiConfig.lang, bill)) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch home featured bills:', error)
      return []
    }
  }

  /**
   * 取得熱門標籤
   * @param limit 限制數量
   * @returns 熱門標籤列表
   */
  static async getPopularTags({ limit = 10 }: { limit?: number }) {
    try {
      const { data } = await query<BillTopTagsQuery, BillTopTagsQueryVariables>(
        {
          query: QUERY_BILL_TOP_TAGS,
          variables: {
            limit,
          },
        }
      )
      return (
        data?.BillTopTags?.filter(
          (tag) => !isNull(tag) && !isNull(tag.tag) && !isUndefined(tag.tag)
        ).map((tag) => ({
          billCount: tag!.billCount ?? 0,
          tag: TagUtils.parse(apiConfig.lang, tag!.tag!),
        })) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch popular tags:', error)
      return []
    }
  }

  /**
   * 取得提案法案最多的前 5 名議員
   * @param limit 限制數量
   * @returns 提案法案最多的前 5 名議員列表
   */
  static async getTopSponsors({ limit = 10 }: { limit?: number }) {
    try {
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
            (sponsor) =>
              !isNull(sponsor?.people) && !isUndefined(sponsor?.people)
          )
          .map(({ people, billCount }) => ({
            people: PeopleUtils.parse(apiConfig.lang, people!),
            billCount: billCount ?? 0,
          })) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch top sponsors:', error)
      return []
    }
  }

  /**
   * 取得共同提案最多的前 5 名議員
   * @param limit 限制數量
   * @returns 共同提案最多的前 5 名議員列表
   */
  static async getTopCosponsors({ limit = 10 }: { limit?: number }) {
    try {
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
    } catch (error) {
      console.error('Failed to fetch top cosponsors:', error)
      return []
    }
  }

  /**
   * 取得最新提案的法案
   * @param limit 限制數量
   * @returns 最新提案的法案列表
   */
  static async getLatestBills({ limit = 10 }: { limit?: number }) {
    try {
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
    } catch (error) {
      console.error('Failed to fetch latest bills:', error)
      return []
    }
  }

  /**
   * 取得熱門提案的法案
   * @param limit 限制數量
   * @returns 熱門提案的法案列表
   */
  static async getPopularBills({ limit = 10 }: { limit?: number }) {
    try {
      const { data: popularBillsData } = await query<
        BillsQuery,
        BillsQueryVariables
      >({
        query: QUERY_BILLS,
        variables: {
          // TODO: 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
          sort: '-introducedAt.datetime',
          limit,
        },
      })
      return (
        popularBillsData?.Bills?.docs
          ?.filter((bill) => !isNull(bill))
          .map((bill) => BillUtils.parse(apiConfig.lang, bill)) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch popular bills:', error)
      return []
    }
  }

  /**
   * 取得提案法案
   * @param id 提案法案ID
   * @returns 提案法案
   */
  static async getBill({ id }: { id: string }) {
    try {
      const { data } = await query<BillQuery, BillQueryVariables>({
        query: QUERY_BILL,
        variables: { id },
      })

      if (!data?.Bill) return null

      return BillUtils.parse(apiConfig.lang, data.Bill)
    } catch (error) {
      console.error('Failed to fetch bill:', error)
      return null
    }
  }

  /**
   * 取得提案法案的相關法案
   * @param id 提案法案ID
   * @returns 提案法案的相關法案列表
   */
  static async getRelatedBills({ id }: { id: string }) {
    try {
      const { data } = await query<BillQuery, BillQueryVariables>({
        query: QUERY_BILL,
        variables: { id },
      })

      return (
        data.Bill?.relatedBills
          ?.filter((bill) => !isNull(bill))
          .map((bill) => BillUtils.parse(apiConfig.lang, bill)) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch related bills:', error)
      return []
    }
  }

  /**
   * 取得法案 IDs
   * @returns 法案 IDs 列表
   */
  static async getBillIds() {
    try {
      const { data } = await query<BillIdsQuery, BillIdsQueryVariables>({
        query: QUERY_BILL_IDS,
      })

      return (
        data?.Bills?.docs
          ?.filter((bill) => !isNull(bill))
          .map((bill) => bill!.id)
          .filter((id) => !isNull(id) && !isUndefined(id)) ?? []
      )
    } catch (error) {
      console.error('Failed to fetch bill IDs:', error)
      return []
    }
  }
}
