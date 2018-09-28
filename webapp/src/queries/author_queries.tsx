import { gql } from 'apollo-boost';

const addAuthorMutation = gql`
    mutation( $firstName: String!, $lastName: String!, $age: Int, $description: String, $books: [ID!] ) {
        createAuthor (firstName: $firstName, lastName: $lastName, age: $age, description: $description, books: $books) {
            firstName,
            lastName,
            age,
            description
        }
    }
`;


export {
    addAuthorMutation
}