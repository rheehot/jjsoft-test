import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Todo {
    id: Int
    checked: Boolean
    title: String
    content: String
    createAt: String
  }
  type Query {
    todos: [Todo]
  }
`;

module.exports = typeDefs