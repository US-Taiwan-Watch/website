import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Language } from '@/common/lib/i18n/types'
import PeopleListSection from '@/modules/People/components/PeopleLanding/PeopleListSection'
import PopularPeopleSection from '@/modules/People/components/PeopleLanding/PopularPeopleSection'
import { Stack } from '@mui/material'

type PeoplePageProps = {
  params: {
    lang: Language
  }
}

export default async function People({ params }: PeoplePageProps) {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'people')

  return (
    <Stack
      flex={1}
      gap={{
        xs: 5,
        sm: 10,
      }}
    >
      {/** Popular People Section */}
      <PopularPeopleSection title={t('landing.section.popularPeople.title')} />
      {/** People List Section */}
      <PeopleListSection />
    </Stack>
  )
}
