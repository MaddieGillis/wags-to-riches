import { gql } from "@apollo/client";
// export const SIGNUP = gql`
//   mutation Signup($avatar: String!, $username: String!, $email: String!, $password: String!) {
//     signup(avatar: $avatar, username: $username, email: $email, password: $password) {
//       token
//       user {
//         avatar
//         username
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
mutation login(
    $email: String!
    $password: String!
) {
    login(
        email: $email
        password: $password
    )
    {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String!
    $email: String!
    $password: String!
) {
    addUser(
        username: $username
        email: $email
        password: $password
    ) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;
