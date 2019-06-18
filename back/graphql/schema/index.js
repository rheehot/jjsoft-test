import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Todo {
    id: Int
    completed: Boolean
    title: String
    content: String
    createAt: Int
  }
  type Query {
    todoDatas: [Todo]
  }
`;

module.exports = typeDefs