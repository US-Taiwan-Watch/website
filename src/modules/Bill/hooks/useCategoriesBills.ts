import {
  CategoriesBillsQuery,
  CategoriesBillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_CATEGORIES_BILLS } from '@/modules/Bill/graphql/gql'
import { useQuery } from '@apollo/client'
import { Language } from '@/common/lib/i18n/types'
import { BillCategoryUtils } from '@/modules/Bill/business/BillCategory'
import { isNull } from 'lodash-es'

export default function useCategoriesBills(lang: Language) {
  const { data } = useQuery<
    CategoriesBillsQuery,
    CategoriesBillsQueryVariables
  >(QUERY_CATEGORIES_BILLS)

  return {
    categoriesBills:
      data?.CategoriesBills?.docs
        ?.filter((doc) => !isNull(doc))
        .map((category) => BillCategoryUtils.parse(lang, category)) ?? [],
  }
}
