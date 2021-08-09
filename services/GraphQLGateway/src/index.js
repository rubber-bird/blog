const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

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

const posts = [{
  "id": 10,
  "title": "soksoa",
  "subtitle": "hhahha",
  "author": 1
}]

const authors = [{
  id: 1,
  "username": "maa"
}]

const resolvers = {
  Query: {
    posts: () => posts,
  },
  Post: {
    author: (parent) => {
      let res = authors.filter(a => a.id === parent.author)
      console.log(res)
      return res[0]
    }
  },
  Mutation: {
    login: async (parents, args, context) => {
      console.log('ss', parents, args, context)
      let result = {
        token: 'success'
      }
      return result
    }
  }
}

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