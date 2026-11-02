import { PeoplesFilterQueryVariables } from '@/common/lib/graphql/__generated__/graphql'
import { PeopleCategory } from '@/modules/People/business/PeopleCategory'
import { PeopleCategoryEnum } from '@/modules/People/components/PeopleFilter/enums'
import {
  defaultCategory,
  PeopleFilterOutput,
  peopleFilterSchema,
} from '@/modules/People/components/PeopleFilter/schema'
import { isNull, isUndefined } from 'lodash-es'

export type PeoplesFilterUrlQuery = {
  category?: string | null
  congress?: string | null
  party?: string | null
  state?: string | null
  tag?: string | null
  stateRegion?: string | null
  district?: string | null
  companyType?: string | null
  officialArea?: string | null
}

export class PeoplesFilterUtils {
  static transformFilterToQueryVariables(
    filter: PeopleFilterOutput,
    categoriesPeopleMap: Record<PeopleCategoryEnum, PeopleCategory>
  ): PeoplesFilterQueryVariables {
    if (
      !('category' in filter) ||
      isUndefined(filter.category) ||
      filter.category === defaultCategory
    ) {
      return {}
    }
    const categoryId = categoriesPeopleMap[filter.category].id
    switch (filter.category) {
      case PeopleCategoryEnum.Senator:
        return {
          ...(filter.category && {
            category: categoryId,
          }),
          ...(filter.congress &&
            filter.congress.length > 0 && {
              congresses: filter.congress,
            }),
          ...(filter.party &&
            filter.party.length > 0 && {
              parties: filter.party,
            }),
          ...(filter.state &&
            filter.state.length > 0 && {
              states: filter.state,
            }),
          ...(filter.tag &&
            filter.tag.length > 0 && {
              tags: filter.tag,
            }),
        }
      case PeopleCategoryEnum.HouseRepresentative:
        return {
          ...(filter.category && {
            category: categoryId,
          }),
          ...(filter.congress &&
            filter.congress.length > 0 && {
              congresses: filter.congress,
            }),
          ...(filter.party &&
            filter.party.length > 0 && {
              parties: filter.party,
            }),
          ...(filter.stateRegion &&
            filter.stateRegion.length > 0 && {
              states: filter.stateRegion,
            }),
          ...(!isUndefined(filter.district) && {
            districts: filter.district,
          }),
          ...(filter.tag &&
            filter.tag.length > 0 && {
              tags: filter.tag,
            }),
        }
      case PeopleCategoryEnum.Official:
        return {
          ...(filter.category && {
            category: categoryId,
          }),
          ...(filter.officialArea &&
            filter.officialArea.length > 0 && {
              officialAreas: filter.officialArea,
            }),
        }
      case PeopleCategoryEnum.Expert:
        return {
          ...(filter.category && {
            category: categoryId,
          }),
          ...(filter.companyType &&
            filter.companyType.length > 0 && {
              companyTypes: filter.companyType,
            }),
        }
      case PeopleCategoryEnum.Other:
        return {
          ...(filter.category && {
            category: categoryId,
          }),
        }
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
    query: PeoplesFilterUrlQuery
  ): PeopleFilterOutput {
    return (
      peopleFilterSchema.safeParse({
        category: query.category ?? defaultCategory,
        congress: this.parseNumberStringArray(query.congress),
        party: this.parseStringArray(query.party),
        state: this.parseStringArray(query.state),
        tag: this.parseStringArray(query.tag),
        stateRegion: this.parseStringArray(query.stateRegion),
        ...(!isNaN(Number(query.district)) &&
          Number(query.district) > 0 && {
            district: Number(query.district),
          }),
        officialArea: this.parseStringArray(query.officialArea),
        companyType: this.parseStringArray(query.companyType),
      }).data ?? {
        category: defaultCategory,
      }
    )
  }

  /**
   * 將過濾器轉換為 URL 查詢
   * @param filter 過濾器
   * @returns URL 查詢
   */
  static transformFilterToUrlQuery(
    filter: PeopleFilterOutput
  ): PeoplesFilterUrlQuery {
    if (
      !('category' in filter) ||
      isUndefined(filter.category) ||
      filter.category === defaultCategory
    ) {
      return {}
    }
    switch (filter.category) {
      case PeopleCategoryEnum.Senator:
        return {
          category: filter.category.toString(),
          congress: filter.congress?.join(',') ?? null,
          party: filter.party?.join(',') ?? null,
          state: filter.state?.join(',') ?? null,
          tag: filter.tag?.join(',') ?? null,
        }
      case PeopleCategoryEnum.HouseRepresentative:
        return {
          category: filter.category.toString(),
          congress: filter.congress?.join(',') ?? null,
          party: filter.party?.join(',') ?? null,
          stateRegion: filter.stateRegion?.join(',') ?? null,
          district: filter.district?.toString() ?? null,
          tag: filter.tag?.join(',') ?? null,
        }
      case PeopleCategoryEnum.Official:
        return {
          category: filter.category.toString(),
          officialArea: filter.officialArea?.join(',') ?? null,
        }
      case PeopleCategoryEnum.Expert:
        return {
          category: filter.category.toString(),
          companyType: filter.companyType?.join(',') ?? null,
        }
      case PeopleCategoryEnum.Other:
        return {
          category: filter.category.toString(),
        }
    }
  }

  /**
   * 將過濾器轉換為 URL 查詢字串，
   * 過濾掉空值
   * @param filter 過濾器
   * @returns URL 查詢字串
   */
  static transformFilterToUrlQueryString(filter: PeopleFilterOutput): string {
    const urlQueryWithoutEmptyValue = Object.fromEntries(
      Object.entries(this.transformFilterToUrlQuery(filter)).filter(
        (entry) => !isNull(entry[1])
      )
    ) as Record<string, string>
    return new URLSearchParams(urlQueryWithoutEmptyValue).toString()
  }
}
