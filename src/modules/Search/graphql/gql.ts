import { TAG_FRAGMENT } from '@/modules/Common/graphql/gql'
import {
  CATEGORIES_ARTICLE_FRAGMENT,
  CATEGORIES_KETAGALAN_FRAGMENT,
} from '@/modules/Article/graphql/gql'
import { BILL_SPONSOR_FRAGMENT } from '@/modules/Bill/graphql/gql'
import { PEOPLE_EXPERIENCES_FRAGMENT } from '@/modules/People/graphql/gql'
import { gql } from '@apollo/client'

export const QUERY_SEARCH = gql`
  query Search(
    $search: String!
    $page: Int!
    $limit: Int!
    $filter: SearchFilterEnum
  ) {
    Search(search: $search, page: $page, limit: $limit, filter: $filter) {
      people {
        count
        items {
          gender
          id
          experiences {
            ...PeopleExperiences
          }
        }
        highlights
      }
      bill {
        count
        items {
          id
          congress
          number
          type
          tags {
            ...Tag
          }
          sponsor {
            ...BillSponsor
          }
        }
        highlights
      }
      article {
        count
        items {
          id
          categories {
            ...CategoriesArticle
          }
        }
        highlights
      }
      ketagalanArticle {
        count
        items {
          id
          categories {
            ...CategoriesKetagalan
          }
        }
        highlights
      }
    }
  }

  ${PEOPLE_EXPERIENCES_FRAGMENT}
  ${TAG_FRAGMENT}
  ${BILL_SPONSOR_FRAGMENT}
  ${CATEGORIES_ARTICLE_FRAGMENT}
  ${CATEGORIES_KETAGALAN_FRAGMENT}
`
