const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: interface
    savedBooks: [Book]      
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
      me: User
    }

    input SavedBook {
      authors: [String]
      description: String
      bookId: String
      image: String
      link: String
      title: String
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(input: SavedBook): User 
      removeBook(bookId: String!): User
      }
`;

module.exports = typeDefs;
