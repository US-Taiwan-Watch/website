'use client'

import { useQuery } from '@apollo/client'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'

export default function ClientPeopleDemo() {
  const { loading, error, data } = useQuery(QUERY_PEOPLES)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
