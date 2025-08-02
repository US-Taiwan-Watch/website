import { gql } from '@apollo/client'

export const QUERY_USTW_MEMBERS = gql`
  query UstwMembers {
    UstwMembers {
      docs {
        id
        i18n {
          en {
            name
            description
          }
          zh {
            name
            description
          }
        }
        photo {
          url
        }
        type
        name
        description
        updatedAt
        createdAt
      }
    }
  }
`
