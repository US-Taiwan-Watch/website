import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Me {
    Me {
      fullName
      email
      subscribeBills
      subscribePeoples
      bookmarkArticles
      notifications
    }
  }
`

export const MUTATION_SUBSCRIBE_BILL = gql`
  mutation SubscribeBill($billId: String!) {
    subscribeBill(id: $billId) {
      id
    }
  }
`

export const MUTATION_SUBSCRIBE_PEOPLE = gql`
  mutation SubscribePeople($peopleId: String!) {
    subscribePeople(id: $peopleId) {
      id
    }
  }
`

export const MUTATION_BOOKMARK_ARTICLE = gql`
  mutation BookmarkArticle($articleId: String!) {
    bookmarkArticle(id: $articleId) {
      id
    }
  }
`
