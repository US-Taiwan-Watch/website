import { gql } from '@apollo/client'
import { MEMBER_FRAGMENT } from '@/modules/Common/graphql/gql'

export const TAIWAN_RECORD_FRAGMENT = gql`
  fragment TaiwanRecord on TaiwanRecord {
    id
    title
    description
    author {
      ...Member
    }
    status
    sources {
      link
      id
    }
    photos {
      id
      photo {
        alt
        url
      }
    }
    versions {
      id
      version
      data
    }
    createdAt
    updatedAt
    people {
      gender
    }
  }

  ${MEMBER_FRAGMENT}
`
