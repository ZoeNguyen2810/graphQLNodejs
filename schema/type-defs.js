const { gql } = require('apollo-server')

const typeDefs = gql`
type User {
  id : ID!
  name : String!
  userName : String!
  age : Int!
  nationality: String!
  friends : [User]
}
type Movie {
  id : ID!
  name : String!
  yearOfPublic : Int!
  isInCinema : Boolean!
}
type Query {
  users : [User!]!
  user ( id : ID!) : User!
  movies : [Movie!]!
  movie ( name : String!) : Movie!

}
`
// enum Nationality {
// CANADA,
// BRAZIL,
// INDIA,
// GERMANY,
// CHILE
// }
module.exports = { typeDefs}