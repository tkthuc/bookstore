const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        authors: [Author!]
        author( id: ID! ): Author        
    }

    extend type Mutation {
        createAuthor(
            firstName: String!
            lastName: String!
            age: Int
            description: String
            books: [ID!]
        ) : Author
    }

    type Author {
        id: ID
        firstName: String
        lastName: String
        books: [Book!]
        age: Int
        description: String
    }
`