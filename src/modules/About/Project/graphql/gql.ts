import { gql } from '@apollo/client'

export const QUERY_USTW_PROJECTS = gql`
  query UstwProjects {
    UstwProjects {
      docs {
        id
        i18n {
          en {
            title
            description
          }
          zh {
            title
            description
          }
        }
        photo {
          url
        }
        title
        description
        updatedAt
        createdAt
      }
    }
  }
`

export const QUERY_KETAGALAN_PROJECTS = gql`
  query KetagalanProjects {
    KetagalanProjects {
      docs {
        id
        i18n {
          en {
            title
            description
          }
          zh {
            title
            description
          }
        }
        photo {
          url
        }
        title
        description
        updatedAt
        createdAt
      }
    }
  }
`
