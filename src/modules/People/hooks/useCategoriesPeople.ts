import {
  CategoriesPeopleQuery,
  CategoriesPeopleQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useQuery } from '@apollo/client/react'
import { Language } from '@/common/lib/i18n/types'
import { isNull } from 'lodash-es'
import { QUERY_CATEGORIES_PEOPLE } from '@/modules/People/graphql/gql'
import { PeopleCategoryUtils } from '@/modules/People/business/PeopleCategory'

export default function useCategoriesPeople(lang: Language) {
  const { data } = useQuery<
    CategoriesPeopleQuery,
    CategoriesPeopleQueryVariables
  >(QUERY_CATEGORIES_PEOPLE)

  return {
    categoriesPeople:
      data?.CategoriesPeople?.docs
        ?.filter((doc) => !isNull(doc))
        .map((category) => PeopleCategoryUtils.parse(lang, category)) ?? [],
  }
}
