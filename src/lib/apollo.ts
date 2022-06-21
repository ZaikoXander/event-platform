import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o6mb2c0xn401z21vvf9so3/master",
  cache: new InMemoryCache()
})
