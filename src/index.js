const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const fs = require("fs")

const typeDefs = importSchema("res/schema.graphql")

const resolvers = {
  Query: {
      users: () => []
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});