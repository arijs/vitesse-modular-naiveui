import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'

// Cache implementation
const cache = new InMemoryCache()

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.spacex.land/graphql/',
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

// HTTP connection to the API
const otherApiHttpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_GQL_URI,
  headers: {
    Authorization: import.meta.env.VITE_GQL_AUTH,
  },
})

// Create the apollo client
export const otherApiClient = new ApolloClient({
  link: otherApiHttpLink,
  cache,
})
