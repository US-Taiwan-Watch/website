'use client'

import { useQuery } from '@apollo/client'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'
import { PeopleUtils } from '@/modules/People/domains/People.utils'
import { CommonUtils } from '@/modules/Common/domain/Common.utils'

export default function ClientPeopleDemo() {
  const { loading, error, data } = useQuery(QUERY_PEOPLES)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Raw Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>
        Parsed Data (Client, 經過 People Utils parse 過的 data, 可直接在 Client
        Component 使用)
      </h2>
      <pre>
        {JSON.stringify(
          (data?.Peoples?.docs ?? [])
            .filter(Boolean)
            .map((people) => PeopleUtils.parse(people!)),
          null,
          2
        )}
      </pre>
      <h2>
        Dayjs usage (Client 透過 Common Utils parse datetime to dayjs, 可直接在
        Client Component 使用)
      </h2>
      <pre>
        {JSON.stringify(
          (data?.Peoples?.docs ?? [])
            .filter(Boolean)
            .map((people) =>
              CommonUtils.parseDateTime(
                PeopleUtils.parse(people!).birthday?.datetime
              )?.format('YYYY-MM-DD')
            ),
          null,
          2
        )}
      </pre>
    </div>
  )
}
