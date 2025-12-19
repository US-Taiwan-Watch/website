import { gql } from '@apollo/client'
import { FULL_BILL_FRAGMENT } from '@/modules/Bill/graphql/gql'
import { FULL_PEOPLE_FRAGMENT } from '@/modules/People/graphql/gql'
import {
  FULL_KETAGALAN_ARTICLE_FRAGMENT,
  FULL_USTW_ARTICLE_FRAGMENT,
} from '@/modules/Article/graphql/gql'
import { TAIWAN_RECORD_FRAGMENT } from '@/modules/TaiwanRecord/graphql/gql'

export const QUERY_ME = gql`
  query Me {
    Me {
      fullName
      email
      subscribeBills {
        id
        congress
        congressGovUrl
        number
        type
      }
      subscribePeoples {
        id
        gender
      }
      bookmarkUstwArticles {
        id
        categories {
          id
        }
        excerpt
        releaseTime
        title
      }
      bookmarkKetagalanArticles {
        id
        categories {
          id
        }
        excerpt
        releaseTime
        title
      }
      provider
      providerId
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

export const MUTATION_UNSUBSCRIBE_BILL = gql`
  mutation UnsubscribeBill($billId: String!) {
    unsubscribeBill(id: $billId) {
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

export const MUTATION_UNSUBSCRIBE_PEOPLE = gql`
  mutation UnsubscribePeople($peopleId: String!) {
    unsubscribePeople(id: $peopleId) {
      id
    }
  }
`

export const MUTATION_BOOKMARK_USTW_ARTICLE = gql`
  mutation BookmarkUstwArticle($articleId: String!) {
    bookmarkUstwArticle(id: $articleId) {
      id
    }
  }
`

export const MUTATION_UNBOOKMARK_USTW_ARTICLE = gql`
  mutation UnbookmarkUstwArticle($articleId: String!) {
    unbookmarkUstwArticle(id: $articleId) {
      id
    }
  }
`

export const MUTATION_BOOKMARK_KETAGALAN_ARTICLE = gql`
  mutation BookmarkKetagalanArticle($articleId: String!) {
    bookmarkKetagalanArticle(id: $articleId) {
      id
    }
  }
`

export const MUTATION_UNBOOKMARK_KETAGALAN_ARTICLE = gql`
  mutation UnbookmarkKetagalanArticle($articleId: String!) {
    unbookmarkKetagalanArticle(id: $articleId) {
      id
    }
  }
`

export const MUTATION_UPDATE_MY_NAME = gql`
  mutation UpdateMyName($name: String!) {
    updateMyName(name: $name) {
      id
    }
  }
`

export const MUTATION_UPDATE_MY_EMAIL = gql`
  mutation UpdateMyEmail($email: String!) {
    updateMyEmail(email: $email) {
      id
    }
  }
`

export const MUTATION_UPDATE_MY_PASSWORD = gql`
  mutation UpdateMyPassword($password: String!) {
    updateMyPassword(password: $password) {
      id
    }
  }
`

export const MUTATION_UPDATE_MY_NOTIFICATION_SETTING = gql`
  mutation UpdateMyNotificationSetting(
    $notificationSetting: mutationMember_NotificationSettingInput!
  ) {
    updateMyNotificationSetting(notificationSetting: $notificationSetting) {
      id
    }
  }
`

export const QUERY_ME_SUBMITTED_TAIWAN_RECORDS = gql`
  query QueryMeSubmittedTaiwanRecords {
    Me {
      submittedTaiwanRecords {
        ...TaiwanRecord
      }
    }
  }

  ${TAIWAN_RECORD_FRAGMENT}
`

export const QUERY_ME_SUBSCRIBES = gql`
  query QueryMeSubscribes {
    Me {
      subscribeBills {
        ...FullBill
      }
      subscribePeoples {
        ...FullPeople
      }
      bookmarkUstwArticles {
        ...FullUstwArticle
      }
      bookmarkKetagalanArticles {
        ...FullKetagalanArticle
      }
    }
  }

  ${FULL_BILL_FRAGMENT}
  ${FULL_PEOPLE_FRAGMENT}
  ${FULL_USTW_ARTICLE_FRAGMENT}
  ${FULL_KETAGALAN_ARTICLE_FRAGMENT}
`

export const QUERY_ME_NOTIFICATION_SETTING = gql`
  query QueryMeNotificationSetting {
    Me {
      notificationSetting {
        subscribedBillUpdate
        podcastRelease
        ustwArticleRelease
        ketagalanArticleRelease
        newsletter
        subscribedPeopleUpdate
        billRelease
      }
    }
  }
`

export const QUERY_ME_BASIC_INFO = gql`
  query QueryMeBasicInfo {
    Me {
      fullName
      email
      provider
      providerId
    }
  }
`
