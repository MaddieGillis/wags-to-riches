import { gql } from "@apollo/client";

export const GET_PETS = gql`
  query Pets {
    pets {
      name
      ownerId {
        email
      }
      sex
    }
  }
`;
