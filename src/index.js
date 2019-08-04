const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const express = require("express")

const typeDefs = importSchema("res/schema.graphql")

const resolvers = {
  Query: {
      users: () => []
  }
}

const server = express()

const graphql = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  playground: true,
})

graphql.applyMiddleware({ app: server, path: "/" })

server.listen(9000, () => {
  console.log(`Server ready at http://localhost:9000`);
});