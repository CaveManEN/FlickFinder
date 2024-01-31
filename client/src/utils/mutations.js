import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation Mutation(
    $username: String!, 
    $email: String!, 
    $password: String!
) {
    addUser(
        username: $username, 
        email: $email, 
        password: $password
    ) {
        user {
        username
      }
    }
}
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($movies: [ID]!) {
    addMovie(movies: $movies) {
      addedDate
      products {
        _id
        name
        description
        category {
          name
        }
      }
    }
  }
`;
