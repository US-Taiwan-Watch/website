import { BillsFilterQueryVariables } from '@/common/lib/graphql/__generated__/graphql'
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import {
  BillFilterInput,
  BillFilterOutput,
  billFilterSchema,
  congressSchema,
  partySchema,
  sorterSchema,
  statusSchema,
  typeSchema,
} from '@/modules/Bill/components/BillFilter/schema'
import { isNull } from 'lodash-es'

export type BillFilterUrlQuery = {
  category?: string | null
  party?: string | null
  type?: string | null
  congress?: string | null
  status?: string | null
  sponsor?: string | null
  cosponsor?: string | null
  tag?: string | null
  sorter?: string | null
}

export class BillsFilterUtils {
  static transformFilterToQueryVariables(
    filter: BillFilterOutput
  ): BillsFilterQueryVariables {
    return {
      // ...(filter.category &&
      //   filter.category.length > 0 && {
      //     categories: {
      //       in: filter.category,
      //     },
      //   }),
      ...(filter.party &&
        filter.party.length > 0 && {
          party: filter.party,
        }),
      ...(filter.type &&
        filter.type.length > 0 && {
          type: filter.type,
        }),
      ...(filter.congress &&
        filter.congress.length > 0 && {
          congress: filter.congress,
        }),
      ...(filter.status &&
        filter.status.length > 0 && {
          status: filter.status,
        }),
      ...(filter.sponsors &&
        filter.sponsors.length > 0 && {
          sponsor: filter.sponsors,
        }),
      ...(filter.cosponsors &&
        filter.cosponsors.length > 0 && {
          cosponsors: filter.cosponsors,
        }),
      ...(filter.tag &&
        filter.tag.length > 0 && {
          tags: filter.tag,
        }),
      ...(filter.sorter && {
        sort: filter.sorter,
      }),
    }
  }

  /**
   * 將字串轉換為陣列
   * @param value 字串
   * @returns 陣列
   */
  static parseStringArray(value?: string | null): string[] {
    if (value) {
      return value.split(',')
    }
    return []
  }

  /**
   * 將字串轉換為數字陣列
   * @param value 字串
   * @returns 數字陣列
   */
  static parseNumberStringArray(value?: string | null): number[] {
    if (value) {
      return value.split(',').map(Number)
    }
    return []
  }

  /**
   * 將 URL 查詢轉換為過濾器
   * @param query URL 查詢
   * @returns 過濾器
   */
  static transformQueryVariablesToFilter(
    query: BillFilterUrlQuery
  ): BillFilterInput {
    const result = billFilterSchema.safeParse({
      category: this.parseStringArray(query.category),
      party:
        partySchema.safeParse(this.parseStringArray(query.party)).data ?? [],
      type: typeSchema.safeParse(this.parseStringArray(query.type)).data ?? [],
      congress:
        congressSchema.safeParse(this.parseNumberStringArray(query.congress))
          .data ?? [],
      status:
        statusSchema.safeParse(this.parseStringArray(query.status)).data ?? [],
      sponsors: this.parseStringArray(query.sponsor),
      cosponsors: this.parseStringArray(query.cosponsor),
      tag: this.parseStringArray(query.tag),
      sorter:
        sorterSchema.safeParse(query.sorter).data ??
        BillSorterEnum.LatestAction,
    })
    return result.data ?? {}
  }

  /**
   * 將過濾器轉換為 URL 查詢
   * @param filter 過濾器
   * @returns URL 查詢
   */
  static transformFilterToUrlQuery(
    filter: BillFilterOutput
  ): BillFilterUrlQuery {
    return {
      category: filter.category?.join(',') ?? null,
      party: filter.party?.join(',') ?? null,
      type: filter.type?.join(',') ?? null,
      congress: filter.congress?.join(',') ?? null,
      status: filter.status?.join(',') ?? null,
      sponsor: filter.sponsors?.join(',') ?? null,
      cosponsor: filter.cosponsors?.join(',') ?? null,
      tag: filter.tag?.join(',') ?? null,
      sorter: filter.sorter ?? BillSorterEnum.LatestAction,
    }
  }

  /**
   * 將過濾器轉換為 URL 查詢字串，
   * 過濾掉空值
   * @param filter 過濾器
   * @returns URL 查詢字串
   */
  static transformFilterToUrlQueryString(filter: BillFilterOutput): string {
    const urlQueryWithoutEmptyValue = Object.fromEntries(
      Object.entries(this.transformFilterToUrlQuery(filter)).filter(
        (entry) => !isNull(entry[1])
      )
    ) as Record<string, string>
    return new URLSearchParams(urlQueryWithoutEmptyValue).toString()
  }
}
