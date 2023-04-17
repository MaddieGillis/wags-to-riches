import { gql } from "@apollo/client";
export const SIGNUP = gql`
  mutation Signup($avatar: String!, $username: String!, $email: String!, $password: String!) {
    signup(avatar: $avatar, username: $username, email: $email, password: $password) {
      token
      user {
        avatar
        username
      }
    }
  }
`;
