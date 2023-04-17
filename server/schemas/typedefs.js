// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type User {
    username: String
    email: String
    avatar: String
    city: String
    isAdmin: Boolean
    password: String
  }

  type Pet {
    name:String
    description:String
    ownerId:User
    age:String
    sex:String
    breed:String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
 type Auth {
  user: User,
  token: ID!
 } 
 
  type Query {
    books: [Book],
    pets: [Pet],
    pet(id:ID):Pet
  }

  input NewPetInput {
    name: String!
    age: Int!
    breed: String!
    ownerEmail: String!
  }

  type Mutation {
    addPet(input: NewPetInput!): Pet!
    signup(avatar: String!, username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
