const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const resolvers = require('./resolvers');
// console.log(resolvers);

const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
    subtitle: String!
    author: User!
  }

  type User {
    id: Int!
    username: String!
  }

  type Query {
    posts: [Post]
  }

  type LoginResult {
    token: String!
  }

  type Mutation {
    login(username: String!, password: String!): LoginResult!
  }
`;



const authors = [{
  id: 1,
  "username": "maa"
}]

const config = {
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({

    })
  ]
};

const server = new ApolloServer(config);

server.listen()
  .then(({url}) => {
    console.log(`Server works at ${url}`);
  });