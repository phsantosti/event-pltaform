import {ApolloClient, InMemoryCache} from "@apollo/client";

const URI = "https://api-sa-east-1.graphcms.com/v2/cl4txjhgq0bqm01un2qkua3by/master";

export const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache()
});