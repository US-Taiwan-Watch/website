import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Language } from '@/common/lib/i18n/types'
import PeopleListSection from '@/modules/People/components/PeopleLanding/PeopleListSection'
import PopularPeopleSection from '@/modules/People/components/PeopleLanding/PopularPeopleSection'
import { Stack } from '@mui/material'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Suspense } from 'react'

type PeoplePageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: PeoplePageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.People }),
    namespace: 'seo_people',
  })
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
      <PopularPeopleSection
        lang={params.lang}
        title={t('landing.section.popularPeople.title')}
      />
      {/** People List Section */}
      <Suspense>
        <PeopleListSection />
      </Suspense>
    </Stack>
  )
}
