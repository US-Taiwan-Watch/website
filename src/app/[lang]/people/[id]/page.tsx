'use client' // for importing mock people data

import PeopleInfoSection from '@/modules/People/components/PeopleTracker/PeopleInfoSection'
import { Stack } from '@mui/material'
import people from '@/modules/People/data'
import PeopleContentSection from '@/modules/People/components/PeopleTracker/PeopleContentSection'

export default function PeopleTracker() {
  return (
    <Stack spacing={6}>
      {/** People Info Section */}
      <PeopleInfoSection people={people} />

      {/** People Content Section */}
      <PeopleContentSection people={people} />
    </Stack>
  )
}
