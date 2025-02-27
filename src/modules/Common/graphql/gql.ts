import { gql } from '@apollo/client'

export const TAG_FRAGMENT = gql`
  fragment Tag on Tag {
    id
    i18n {
      en {
        name
      }
      zh {
        name
      }
    }
    isFeatured
  }
`

export const MEMBER_FRAGMENT = gql`
  fragment Member on Member {
    id
    fullName
    email
  }
`

export const QUERY_TAGS = gql`
  query Tags($where: Tag_where, $limit: Int, $page: Int, $sort: String) {
    Tags(where: $where, limit: $limit, page: $page, sort: $sort) {
      hasNextPage
      hasPrevPage
      limit
      nextPage
      offset
      page
      pagingCounter
      prevPage
      totalDocs
      totalPages
      docs {
        ...Tag
      }
    }
  }

  ${TAG_FRAGMENT}
`
