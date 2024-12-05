import { gql } from '@/common/lib/graphql/__generated__'

// FIXME: Demo
export const QUERY_PEOPLES = gql(`
  query QueryPeople(
    $limit: Int
    $page: Int
    $sort: String
    $where: People_where
  ) {
    Peoples(limit: $limit, page: $page, sort: $sort, where: $where) {
      docs {
        id
        billCount
        bio
        gender
        birthday {
          datetime
        }
      }
    }
  }
`)
