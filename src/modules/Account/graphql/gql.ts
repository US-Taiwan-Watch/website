import { gql } from '@apollo/client'
import { FULL_BILL_FRAGMENT } from '@/modules/Bill/graphql/gql'
import { FULL_PEOPLE_FRAGMENT } from '@/modules/People/graphql/gql'
import { FULL_ARTICLE_FRAGMENT } from '@/modules/Article/graphql/gql'

export const QUERY_ME = gql`
  query Me {
    Me {
      fullName
      email
      subscribeBills {
        ...FullBill
      }
      subscribePeoples {
        ...FullPeople
      }
      bookmarkArticles {
        ...FullArticle
      }
      notifications
    }
  }

  ${FULL_BILL_FRAGMENT}
  ${FULL_PEOPLE_FRAGMENT}
  ${FULL_ARTICLE_FRAGMENT}
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
