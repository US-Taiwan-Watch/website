import { config } from '@/config'
import {
  ApolloLink,
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
  HttpLink,
} from '@apollo/client'
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'
import { ErrorLink } from '@apollo/client/link/error'

export const { getClient, PreloadQuery } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: config.GRAPHQL_API_URL,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    // fetchOptions: { cache: 'no-store' },
  })

  // 創建錯誤處理 link
  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    } else if (CombinedProtocolErrors.is(error)) {
      error.errors.forEach(({ message, extensions }) =>
        console.log(
          `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(
            extensions
          )}`
        )
      )
    } else {
      console.error(`[Network error]: ${error}`)
    }
  })

  // 創建 Request Log，測試用，需要時 uncomment
  // const requestLink = new ApolloLink((operation, forward) => {
  //   const { variables } = operation
  //   console.log(`[GraphQL request]: ${operation.operationName}`)
  //   console.log(`[Variables]: ${JSON.stringify(variables)}`)
  //   return forward(operation)
  // })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, httpLink]),
  })
})
