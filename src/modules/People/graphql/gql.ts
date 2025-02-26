import { gql } from '@apollo/client'
import {
  BILL_I18N_FRAGMENT,
  CATEGORIES_BILL_FRAGMENT,
} from '@/modules/Bill/graphql/gql'
import { PAGINATION_FIELDS, TAG_FRAGMENT } from '@/modules/Common/graphql/gql'
import { TAIWAN_RECORD_FRAGMENT } from '@/modules/TaiwanRecord/graphql/gql'

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
    category
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

  ${BILL_I18N_FRAGMENT}
`

export const FULL_PEOPLE_FRAGMENT = gql`
  fragment FullPeople on People {
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
    gender
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
        id
      }
      cosponsorBills {
        id
      }
      votes {
        id
      }
    }
  }

  ${FULL_PEOPLE_FRAGMENT}
`

export const QUERY_PEOPLE_BILLS = gql`
  query peopleBills($id: String!) {
    People(id: $id) {
      sponsorBills {
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
      ${PAGINATION_FIELDS}
      docs {
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
