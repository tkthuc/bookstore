const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        books: [Book!]
        book( id: ID! ): Book        
    }

    extend type Mutation {
        createBook(
            name: String!
            publishedDate: String
            description: String
            authors: [ID!]
        ) : Book!
    }

    type Book {
        id: ID,
        name: String,
        authors: [Author!],
        publishedDate: String
        description: String
    }
`