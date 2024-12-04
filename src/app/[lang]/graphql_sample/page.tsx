import ClientPeopleDemo from '@/app/[lang]/graphql_sample/_components/ClientPeopleDemo'
import { query } from '@/common/lib/graphql/ServerApolloClient'
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
      <h1>Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Client</h1>
      <ClientPeopleDemo />
    </div>
  )
}
