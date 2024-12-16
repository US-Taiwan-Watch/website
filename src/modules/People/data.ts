import { People } from '@/common/lib/graphql/__generated__/graphql'
import {
  PEOPLE_DTO_MOCK,
  POPULAR_PEOPLE_DTO_MOCK,
} from '@/modules/People/dtoData'

export const findPopularPeople = () => {
  return POPULAR_PEOPLE_DTO_MOCK
}

export const findAllPeople = () => {
  return PEOPLE_DTO_MOCK
}

const PEOPLE_MOCK_MAP = PEOPLE_DTO_MOCK.reduce<Record<string, People>>(
  (acc, people) => {
    if (!people.id) return acc
    acc[people.id] = people
    return acc
  },
  {}
)

export const findPeople = (id: string) => {
  return PEOPLE_MOCK_MAP[id]
}
