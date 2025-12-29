import { gql } from '@apollo/client'
import { TAG_FRAGMENT } from '@/modules/Common/graphql/gql'
import { TAIWAN_RECORD_FRAGMENT } from '@/modules/TaiwanRecord/graphql/gql'

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

export const PEOPLE_I18N_FRAGMENT = gql`
  fragment PeopleI18n on People_I18n {
    en {
      firstName
      lastName
      middleName
      displayName
      bio
      otherNames {
        otherName
        id
      }
    }
    zh {
      firstName
      lastName
      middleName
      displayName
      bio
      otherNames {
        otherName
        id
      }
    }
  }
`

export const MEDIA_PERSON_FRAGMENT = gql`
  fragment MediaPerson on MediaPerson {
    id
    alt
    url
  }
`

export const PEOPLE_BIRTHDAY_FRAGMENT = gql`
  fragment PeopleBirthday on People_Birthday {
    datetime
    precision
  }
`

export const PEOPLE_CONGRESSIONAL_DATA_COMMITTEES_SUBCOMMITTEES_FRAGMENT = gql`
  fragment PeopleCongressionalDataCommitteesSubcommittees on People_CongressionalData_Committees_Subcommittees {
    id
    name
    title
    systemCode
  }
`

export const PEOPLE_CONGRESSIONAL_DATA_COMMITTEES_FRAGMENT = gql`
  fragment PeopleCongressionalDataCommittees on People_CongressionalData_Committees {
    id
    name
    title
    subcommittees {
      ...PeopleCongressionalDataCommitteesSubcommittees
    }
    systemCode
  }
  ${PEOPLE_CONGRESSIONAL_DATA_COMMITTEES_SUBCOMMITTEES_FRAGMENT}
`

export const PEOPLE_CONGRESSIONAL_DATA_FRAGMENT = gql`
  fragment PeopleCongressionalData on People_CongressionalData {
    bioGuideId
    govTrackId
    committees {
      ...PeopleCongressionalDataCommittees
    }
  }
  ${PEOPLE_CONGRESSIONAL_DATA_COMMITTEES_FRAGMENT}
`

export const PEOPLE_EXPERIENCES_FRAGMENT = gql`
  fragment PeopleExperiences on People_Experiences {
    id
    isCurrent
    category {
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
    company
    positions {
      id
      title
      description
      start {
        datetime
      }
      end {
        datetime
      }
      state
      district
      party
      congresses
      officialAreas
      companyType
    }
  }
`

export const PEOPLE_PUBLICATIONS_FRAGMENT = gql`
  fragment PeoplePublications on People_Publications {
    id
    title
    link
    abstract
  }
`

export const PEOPLE_LINKS_FRAGMENT = gql`
  fragment PeopleLinks on People_Links {
    id
    link
    title
    type
  }
`

export const PEOPLE_PARTY_CHANGE_RECORDS_FRAGMENT = gql`
  fragment PeoplePartyChangeRecords on People_PartyChangeRecords {
    id
    newParty
    oldParty
    changedAt {
      datetime
    }
  }
`

export const PEOPLE_VOTES_FRAGMENT = gql`
  fragment PeopleVotes on People_Votes {
    id
    party
    stance
    vote {
      id
      rollCall
      congress
      session
      voteNumber
      type
      status
      votedAt {
        datetime
      }
      link
      question
      amendmentAuthor {
        gender
        id
        i18n {
          ...PeopleI18n
        }
        currentParty
        displayName
      }
      result
      bill {
        id
        i18n {
          ...BillI18n
        }
        congress
        number
        type
        congressGovUrl
        introducedAt {
          datetime
          precision
        }
        categories {
          ...CategoriesBill
        }
        tags {
          ...Tag
        }
        title
        summary
        latestActionTime
        updatedAt
        createdAt
      }
      updatedAt
      createdAt
    }
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${BILL_I18N_FRAGMENT}
  ${CATEGORIES_BILL_FRAGMENT}
  ${TAG_FRAGMENT}
`

export const FULL_PEOPLE_FRAGMENT = gql`
  fragment FullPeople on People {
    gender
    id
    i18n {
      ...PeopleI18n
    }
    photo {
      ...MediaPerson
    }
    birthday {
      ...PeopleBirthday
    }
    tags {
      ...Tag
    }
    congressionalData {
      ...PeopleCongressionalData
    }
    experiences {
      ...PeopleExperiences
    }
    publications {
      ...PeoplePublications
    }
    links {
      ...PeopleLinks
    }
    partyChangeRecords {
      ...PeoplePartyChangeRecords
    }
    viewCount
    billCount
    currentParty
    records {
      ...TaiwanRecord
    }
    displayName
    bio
    govTrackId
    updatedAt
    createdAt
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${MEDIA_PERSON_FRAGMENT}
  ${PEOPLE_BIRTHDAY_FRAGMENT}
  ${TAG_FRAGMENT}
  ${PEOPLE_CONGRESSIONAL_DATA_FRAGMENT}
  ${PEOPLE_EXPERIENCES_FRAGMENT}
  ${PEOPLE_PUBLICATIONS_FRAGMENT}
  ${PEOPLE_LINKS_FRAGMENT}
  ${PEOPLE_PARTY_CHANGE_RECORDS_FRAGMENT}
  ${TAIWAN_RECORD_FRAGMENT}
`

export const QUERY_PEOPLE = gql`
  query people($id: String!) {
    People(id: $id) {
      ...FullPeople
      sponsorBills {
        congress
        number
        type
        congressGovUrl
      }
      cosponsorBills {
        congress
        number
        type
        congressGovUrl
      }
      votes {
        id
      }
    }
  }

  ${FULL_PEOPLE_FRAGMENT}
`

export const QUERY_PEOPLE_SPONSOR_BILLS = gql`
  query peopleSponsorBills($id: String!) {
    People(id: $id) {
      sponsorBills {
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
        tags {
          ...Tag
        }
        statusTracker {
          currentStep
          passedSteps
          futureSteps
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
`

export const QUERY_PEOPLE_COSPONSOR_BILLS = gql`
  query peopleCosponsorBills($id: String!) {
    People(id: $id) {
      cosponsorBills {
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
        popularityRank
        title
        summary
        latestActionTime
        updatedAt
        createdAt
        sponsor {
          people {
            gender
            id
            i18n {
              ...PeopleI18n
            }
            currentParty
          }
          party
        }
      }
    }
  }

  ${BILL_I18N_FRAGMENT}
  ${CATEGORIES_BILL_FRAGMENT}
  ${TAG_FRAGMENT}
  ${PEOPLE_I18N_FRAGMENT}
`

export const QUERY_PEOPLE_VOTES = gql`
  query peopleVotes($id: String!) {
    People(id: $id) {
      votes {
        ...PeopleVotes
      }
    }
  }

  ${PEOPLE_VOTES_FRAGMENT}
`

export const QUERY_PEOPLES = gql`
  query peoples($limit: Int, $sort: String, $page: Int, $where: People_where) {
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
        photo {
          ...MediaPerson
        }
        tags {
          ...Tag
        }
        experiences {
          ...PeopleExperiences
        }
        currentParty
        bio
        displayName
      }
    }
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${MEDIA_PERSON_FRAGMENT}
  ${TAG_FRAGMENT}
  ${PEOPLE_EXPERIENCES_FRAGMENT}
`

export const QUERY_PEOPLE_FILTER = gql`
  query PeoplesFilter(
    $limit: Int
    $page: Int
    $sort: String
    $category: String
    $congresses: [Int!]
    $parties: [String!]
    $states: [String!]
    $district: Int
    $officialAreas: [String!]
    $companyTypes: [String!]
    $tags: [JSON]
  ) {
    PeoplesFilter(
      limit: $limit
      page: $page
      sort: $sort
      where: {
        experiences__category: { equals: $category }
        experiences__positions__congresses: { in: $congresses }
        experiences__positions__party: { in: $parties }
        experiences__positions__state: { in: $states }
        experiences__positions__district: { equals: $district }
        experiences__positions__officialAreas: { in: $officialAreas }
        experiences__positions__companyType: { in: $companyTypes }
        tags: { in: $tags }
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
        gender
        id
        i18n {
          ...PeopleI18n
        }
        photo {
          ...MediaPerson
        }
        tags {
          ...Tag
        }
        experiences {
          ...PeopleExperiences
        }
        currentParty
        bio
        displayName
      }
    }
  }

  ${PEOPLE_I18N_FRAGMENT}
  ${MEDIA_PERSON_FRAGMENT}
  ${TAG_FRAGMENT}
  ${PEOPLE_EXPERIENCES_FRAGMENT}
`

export const QUERY_CATEGORIES_PEOPLE = gql`
  query CategoriesPeople {
    CategoriesPeople {
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
        nameEn
      }
    }
  }
`

export const QUERY_PEOPLE_IDS = gql`
  query PeopleIds {
    Peoples {
      docs {
        id
        updatedAt
      }
    }
  }
`
