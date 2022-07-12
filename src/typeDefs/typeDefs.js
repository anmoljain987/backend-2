import { gql } from "apollo-server";
export const typeDefs = gql`
  extend type User @key(fields: "uid") {
    uid: String! @external
  }
  type Detail @key(fields: "uid") {
    id: ID!
    name: String!
    age: Int!
    phoneNumber: String!
    user: User!
    uid: String!
  }
  type Query {
    details: [Detail!]!
  }
  type Mutation {
    createDetails(name: String!, age: Int!, phoneNumber: String!): Detail
  }
`;
