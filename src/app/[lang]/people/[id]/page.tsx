import PeopleInfoSection from '@/modules/People/components/PeopleTracker/PeopleInfoSection'
import { Stack } from '@mui/material'
import PeopleContentSection from '@/modules/People/components/PeopleTracker/PeopleContentSection'
import TaiwanRecordSection from '@/modules/People/components/PeopleTracker/TaiwanRecordSection'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ServerPeopleApi from '@/modules/People/api/ServerPeopleApi'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

export const revalidate = 86400

interface PeopleTrackerProps {
  params: {
    id: string
    lang: Language
  }
}

export const generateStaticParams = async ({ params }: PeopleTrackerProps) => {
  const peopleIds = await ServerPeopleApi.getPeopleIds()
  return peopleIds.map((people) => ({ id: people.id, lang: params.lang }))
}

export const generateMetadata = async ({
  params,
}: PeopleTrackerProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  const people = await ServerPeopleApi.getPeople(params.lang, { id: params.id })
  const peopleName = people?.name ?? ''
  const peopleDescription = people?.description

  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.PeopleDetail,
        params: { peopleId: params.id },
      }),
      namespace: 'seo_people_detail',
      titleVariables: {
        peopleName,
      },
      descriptionVariables: {
        peopleName,
      },
    })),
    ...(peopleDescription && { description: peopleDescription }),
  }
}

export default async function PeopleTracker({ params }: PeopleTrackerProps) {
  const people = await ServerPeopleApi.getPeople(params.lang, { id: params.id })

  if (!people) notFound()

  return (
    <Stack
      gap={{
        xs: 2.5,
        sm: 5,
      }}
    >
      {/** People Info Section */}
      <PeopleInfoSection people={people} />

      {/** People Content Section */}
      <PeopleContentSection people={people} />

      {/** Taiwan Record Section */}
      <TaiwanRecordSection people={people} />
    </Stack>
  )
}
