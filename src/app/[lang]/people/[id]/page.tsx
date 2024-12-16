'use client' // for importing mock people data

import PeopleInfoSection from '@/modules/People/components/PeopleTracker/PeopleInfoSection'
import { Stack } from '@mui/material'
import PeopleContentSection from '@/modules/People/components/PeopleTracker/PeopleContentSection'
import TaiwanRecordSection from '@/modules/People/components/PeopleTracker/TaiwanRecordSection'
import { findPeople } from '@/modules/People/data'
import { People } from '@/modules/People/classes/People'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'

interface PeopleTrackerProps {
  params: {
    id: string
    lang: Language
  }
}

export default function PeopleTracker({ params }: PeopleTrackerProps) {
  const dto = findPeople(params.id)
  if (!dto) return notFound()
  const people = People.fromDTO(params.lang, dto)

  return (
    <Stack gap={6}>
      {/** People Info Section */}
      <PeopleInfoSection people={people} />

      {/** People Content Section */}
      <PeopleContentSection people={people} />

      {/** Taiwan Record Section */}
      <TaiwanRecordSection />
    </Stack>
  )
}
