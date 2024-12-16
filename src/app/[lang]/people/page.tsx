'use client'

import PeopleListSection from '@/modules/People/components/PeopleLanding/PeopleListSection'
import PopularPeopleSection from '@/modules/People/components/PeopleLanding/PopularPeopleSection'
import { findAllPeople, findPopularPeople } from '@/modules/People/data'
import { Stack } from '@mui/material'
import { People as PeopleClass } from '@/modules/People/classes/People'
import { Language } from '@/common/lib/i18n/types'

interface PeoplePageProps {
  params: {
    lang: Language
  }
}

export default function People({ params }: PeoplePageProps) {
  const popularPeoples = findPopularPeople().map((dto) =>
    PeopleClass.fromDTO(dto, params.lang)
  )
  const peoples = findAllPeople().map((dto) =>
    PeopleClass.fromDTO(dto, params.lang)
  )

  return (
    <Stack gap={10}>
      {/** Popular People Section */}
      <PopularPeopleSection peoples={popularPeoples} />
      {/** People List Section */}
      <PeopleListSection peoples={peoples} />
    </Stack>
  )
}
