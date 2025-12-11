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
