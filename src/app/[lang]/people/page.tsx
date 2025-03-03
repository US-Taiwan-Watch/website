import PeopleListSection from '@/modules/People/components/PeopleLanding/PeopleListSection'
import PopularPeopleSection from '@/modules/People/components/PeopleLanding/PopularPeopleSection'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'

interface PeoplePageProps {
  params: {
    lang: Language
  }
}

export default async function People({ params }: PeoplePageProps) {
  return (
    <Stack flex={1} gap={10}>
      {/** Popular People Section */}
      <PopularPeopleSection />
      {/** People List Section */}
      <PeopleListSection lang={params.lang} />
    </Stack>
  )
}
