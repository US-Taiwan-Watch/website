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
        id
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
      id
      gender
      i18n {
        en {
          displayName
        }
        zh {
          displayName
        }
      }
    }
  }

  ${MEMBER_FRAGMENT}
`

export const MUTATION_SUBMIT_TAIWAN_RECORD = gql`
  mutation SubmitTaiwanRecord($data: mutationSubmitTaiwanRecordInput!) {
    submitTaiwanRecord(data: $data) {
      id
    }
  }
`

export const MUTATION_WITHDRAW_TAIWAN_RECORD = gql`
  mutation WithdrawTaiwanRecord($id: String!) {
    withdrawTaiwanRecord(id: $id) {
      id
    }
  }
`

export const MUTATION_MODIFY_TAIWAN_RECORD = gql`
  mutation ModifyTaiwanRecord(
    $id: String!
    $data: mutationModifyTaiwanRecordInput!
    $resubmitForReview: Boolean
  ) {
    modifyTaiwanRecord(
      id: $id
      data: $data
      resubmitForReview: $resubmitForReview
    ) {
      id
    }
  }
`

export const QUERY_PEOPLE_PUBLISHED_TAIWAN_RECORDS = gql`
  query QueryPeoplePublishedTaiwanRecords(
    $peopleId: JSON!
    $limit: Int
    $page: Int
    $sort: String
  ) {
    TaiwanRecords(
      where: { people: { equals: $peopleId }, status: { equals: published } }
      limit: $limit
      page: $page
      sort: $sort
    ) {
      docs {
        ...TaiwanRecord
      }
      totalPages
      totalDocs
      page
      hasNextPage
    }
  }

  ${TAIWAN_RECORD_FRAGMENT}
`
