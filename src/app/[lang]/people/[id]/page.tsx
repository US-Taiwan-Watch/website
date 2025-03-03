import PeopleInfoSection from '@/modules/People/components/PeopleTracker/PeopleInfoSection'
import { Stack } from '@mui/material'
import PeopleContentSection from '@/modules/People/components/PeopleTracker/PeopleContentSection'
import TaiwanRecordSection from '@/modules/People/components/PeopleTracker/TaiwanRecordSection'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import PeopleApi from '@/modules/People/api/PeopleApi'

interface PeopleTrackerProps {
  params: {
    id: string
    lang: Language
  }
}

export default async function PeopleTracker({ params }: PeopleTrackerProps) {
  const people = await PeopleApi.getPeople({ id: params.id })

  if (!people) notFound()

  return (
    <Stack gap={6}>
      {/** People Info Section */}
      <PeopleInfoSection people={people} />

      {/** People Content Section */}
      <PeopleContentSection people={people} />

      {/** Taiwan Record Section */}
      <TaiwanRecordSection people={people} />
    </Stack>
  )
}
