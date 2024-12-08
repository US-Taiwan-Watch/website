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

export const findPeople = (id: string) => {
  return PEOPLE_DTO_MOCK.find((people) => people.id === id)
}
