import PeopleInfoSection from '@/modules/People/components/PeopleTracker/PeopleInfoSection'
import { Stack } from '@mui/material'
import PeopleContentSection from '@/modules/People/components/PeopleTracker/PeopleContentSection'
import TaiwanRecordSection from '@/modules/People/components/PeopleTracker/TaiwanRecordSection'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import {
  PeopleQuery,
  PeopleQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_PEOPLE } from '@/modules/People/graphql/gql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { PeopleUtils } from '@/modules/People/business/People'

interface PeopleTrackerProps {
  params: {
    id: string
    lang: Language
  }
}

export default async function PeopleTracker({ params }: PeopleTrackerProps) {
  const { data } = await query<PeopleQuery, PeopleQueryVariables>({
    query: QUERY_PEOPLE,
    variables: { id: params.id },
  })

  if (!data?.People) notFound()

  const people = PeopleUtils.parse(params.lang, data.People)

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
