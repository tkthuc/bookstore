import { gql } from 'apollo-boost';

const addBookMutation = gql`
    mutation ($name: String!, $date: String, $description: String, $authors: [ID!]) {
        createBook(name: $name, publishedDate: $date, description: $description, authors: $authors ) {
            name,
            description,
            id
        }
    }
`

const getBooksList = gql `
    query {
        books {
            name,
            description,
            publishedDate,
            id,
            authors {
                lastName,
                firstName
            }
        }
    }
`



export {
    addBookMutation,
    getBooksList
}