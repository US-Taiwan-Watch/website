import { gql } from '@apollo/client'
import { TAG_FRAGMENT } from '@/modules/Common/graphql/gql'
import {
  MEDIA_PERSON_FRAGMENT,
  PEOPLE_EXPERIENCES_FRAGMENT,
  PEOPLE_I18N_FRAGMENT,
} from '@/modules/People/graphql/gql'

export const BILL_I18N_FRAGMENT = gql`
  fragment BillI18n on Bill_I18n {
    en {
      title
      summary
      actionsOverview
      actionsAll
    }
    zh {
      title
      summary
      actionsOverview
      actionsAll
    }
  }
`

export const CATEGORIES_BILL_FRAGMENT = gql`
  fragment CategoriesBill on CategoriesBill {
    id
    i18n {
      en {
        name
      }
      zh {
        name
      }
    }
  }
`

export const BILL_SPONSOR_FRAGMENT = gql`
  fragment BillSponsor on Bill_Sponsor {
    people {
      gender
      id
      i18n {
        ...PeopleI18n
      }
      displayName
      currentParty
      photo {
        ...MediaPerson
      }
      experiences {
        ...PeopleExperiences
      }
    }
    party
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${MEDIA_PERSON_FRAGMENT}
  ${PEOPLE_EXPERIENCES_FRAGMENT}
`

export const BILL_COSPONSOR_FRAGMENT = gql`
  fragment BillCosponsors on Bill_Cosponsors {
    id
    people {
      gender
      id
      i18n {
        ...PeopleI18n
      }
      displayName
      currentParty
      photo {
        ...MediaPerson
      }
      experiences {
        ...PeopleExperiences
      }
    }
    constituency
    party
    cosponsoredAt {
      datetime
      precision
    }
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${MEDIA_PERSON_FRAGMENT}
  ${PEOPLE_EXPERIENCES_FRAGMENT}
`

export const FULL_BILL_FRAGMENT = gql`
  fragment FullBill on Bill {
    congress
    number
    type
    congressGovUrl
    id
    i18n {
      ...BillI18n
    }
    introducedAt {
      datetime
      precision
    }
    isFeatured
    categories {
      ...CategoriesBill
    }
    tags {
      ...Tag
    }
    statusTracker {
      currentStep
      passedSteps
      futureSteps
    }
    sponsor {
      ...BillSponsor
    }
    cosponsors {
      ...BillCosponsors
    }
    congressGovUrl
    popularityRank
    title
    summary
    latestActionTime
    updatedAt
    createdAt
    relatedBills {
      congress
      number
      type
      congressGovUrl
      id
      i18n {
        ...BillI18n
      }
      congress
      number
      type
      introducedAt {
        datetime
        precision
      }
      categories {
        ...CategoriesBill
      }
      statusTracker {
        currentStep
        passedSteps
        futureSteps
      }
      sponsor {
        ...BillSponsor
      }
      popularityRank
      title
      summary
      latestActionTime
      updatedAt
      createdAt
    }
  }

  ${BILL_I18N_FRAGMENT}
  ${CATEGORIES_BILL_FRAGMENT}
  ${TAG_FRAGMENT}
  ${BILL_SPONSOR_FRAGMENT}
  ${BILL_COSPONSOR_FRAGMENT}
`

export const QUERY_BILL = gql`
  query Bill($id: String!) {
    Bill(id: $id) {
      ...FullBill
    }
  }

  ${FULL_BILL_FRAGMENT}
`

export const QUERY_BILLS = gql`
  query Bills($where: Bill_where, $limit: Int, $page: Int, $sort: String) {
    Bills(where: $where, limit: $limit, page: $page, sort: $sort) {
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
        congress
        number
        type
        congressGovUrl
        id
        i18n {
          ...BillI18n
        }
        introducedAt {
          datetime
          precision
        }
        isFeatured
        categories {
          ...CategoriesBill
        }
        tags {
          ...Tag
        }
        statusTracker {
          currentStep
          passedSteps
          futureSteps
        }
        sponsor {
          ...BillSponsor
        }
        popularityRank
        title
        summary
        latestActionTime
        updatedAt
        createdAt
      }
    }
  }

  ${BILL_I18N_FRAGMENT}
  ${CATEGORIES_BILL_FRAGMENT}
  ${TAG_FRAGMENT}
  ${BILL_SPONSOR_FRAGMENT}
`

export const QUERY_BILL_COUNT = gql`
  query CountBills {
    countBills {
      totalDocs
    }
  }
`

export const QUERY_BILL_TOP_TAGS = gql`
  query BillTopTags($limit: Int!) {
    BillTopTags(limit: $limit) {
      billCount
      tag {
        id
        i18n {
          en {
            name # Tag英文名稱
          }
          zh {
            name # Tag中文名稱
          }
        }
      }
    }
  }
`

export const QUERY_CATEGORIES_BILLS = gql`
  query CategoriesBills {
    CategoriesBills {
      docs {
        id
        i18n {
          en {
            name # Category英文名稱
          }
          zh {
            name # Category中文名稱
          }
        }
      }
    }
  }
`

export const QUERY_BILL_TREND_BY_CATEGORY = gql`
  query BillTrendByCategory($category: String) {
    BillTrendByCategory(category: $category) {
      congress # 國會屆數
      billCount # 法案數量
    }
  }
`

export const QUERY_BILL_TOP_SPONSORS = gql`
  query BillTopSponsors($limit: Int!) {
    BillTopSponsors(limit: $limit) {
      billCount # Sponsor Bill數量
      people {
        id # Sponsor ID
        i18n {
          en {
            displayName # Sponsor英文名稱
          }
          zh {
            displayName # Sponsor中文名稱
          }
        }
        currentParty # Sponsor當前政黨
        gender
      }
    }
  }
`

export const QUERY_BILL_TOP_COSPONSORS = gql`
  query BillTopCosponsors($limit: Int!) {
    BillTopCosponsors(limit: $limit) {
      billCount # Cosponsor Bill數量
      people {
        id # Cosponsor ID
        i18n {
          en {
            displayName # Cosponsor英文名稱
          }
          zh {
            displayName # Cosponsor中文名稱
          }
        }
        currentParty # Cosponsor當前政黨
        gender
      }
    }
  }
`

export const QUERY_BILL_FILTER_SPONSORS = gql`
  query BillFilterSponsors(
    $limit: Int
    $sort: String
    $page: Int
    $where: People_where
  ) {
    Peoples(limit: $limit, sort: $sort, page: $page, where: $where) {
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
        gender
        id
        i18n {
          ...PeopleI18n
        }
      }
    }
  }

  ${PEOPLE_I18N_FRAGMENT}
`

export const QUERY_CURRENT_CONGRESS_BILL_COUNT = gql`
  query CurrentCongressBillCount($congress: Float!) {
    Bills(where: { congress: { equals: $congress } }) {
      totalDocs
    }
  }
`

export const QUERY_BILL_FILTER = gql`
  query BillsFilter(
    $limit: Int
    $page: Int
    $sort: String
    $party: [String!]
    $type: [String!]
    $congress: [Int!]
    $status: [String!]
    $sponsor: [JSON]
    $cosponsors: [JSON]
    $tags: [JSON]
    $categories: [JSON]
  ) {
    BillsFilter(
      limit: $limit
      page: $page
      sort: $sort
      where: {
        sponsor__party: { in: $party }
        type: { in: $type }
        congress: { in: $congress }
        statusTracker__currentStep: { in: $status }
        sponsor__people: { in: $sponsor }
        cosponsors__people: { in: $cosponsors }
        tags: { in: $tags }
        categories: { in: $categories }
      }
    ) {
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
        congress
        number
        type
        congressGovUrl
        id
        i18n {
          ...BillI18n
        }
        introducedAt {
          datetime
          precision
        }
        isFeatured
        categories {
          ...CategoriesBill
        }
        tags {
          ...Tag
        }
        statusTracker {
          currentStep
          passedSteps
          futureSteps
        }
        sponsor {
          ...BillSponsor
        }
        popularityRank
        title
        summary
        latestActionTime
        updatedAt
        createdAt
      }
    }
  }

  ${BILL_I18N_FRAGMENT}
  ${CATEGORIES_BILL_FRAGMENT}
  ${TAG_FRAGMENT}
  ${BILL_SPONSOR_FRAGMENT}
`

export const QUERY_BILL_IDS = gql`
  query BillIds {
    Bills(limit: 2147483647) {
      docs {
        id
        updatedAt
      }
    }
  }
`
