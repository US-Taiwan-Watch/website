import ClientPeopleDemo from '@/app/[lang]/graphql_sample/_components/ClientPeopleDemo'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { PeopleUtils } from '@/modules/People/domains/People.utils'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'

export default async function GraphqlSamplePage() {
  const { data } = await query({
    query: QUERY_PEOPLES,
    variables: {
      limit: 10,
      page: 1,
    },
  })

  return (
    <div>
      <h1>Server (Raw Data)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>
        Parsed Data (經過 People Utils parse 過的 data, 可直接在 RSC 使用)
      </h2>
      <pre>
        {JSON.stringify(
          (data.Peoples?.docs ?? [])
            .filter(Boolean)
            .map((people) => PeopleUtils.parse(people!)),
          null,
          2
        )}
      </pre>
      <h1>Client (Client Component)</h1>
      <ClientPeopleDemo />
    </div>
  )
}
