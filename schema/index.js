const { gql } = require('apollo-server-express');
const authorSchema = require('./author');
const bookSchema = require('./book');

const linkSchema = gql`
                    type Query {
                       _: Boolean
                    }

                    type Mutation {
                       _: Boolean
                    }
                    `;

module.exports = [linkSchema, authorSchema, bookSchema]
