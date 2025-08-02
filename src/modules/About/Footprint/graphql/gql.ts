import { gql } from '@apollo/client'

export const QUERY_USTW_FOOTPRINTS = gql`
  query UstwFootprints {
    UstwFootprints {
      docs {
        id
        i18n {
          en {
            title
            source
          }
          zh {
            title
            source
          }
        }
        type
        link
        title
        source
        updatedAt
        createdAt
      }
    }
  }
`
