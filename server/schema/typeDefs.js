const typeDefs = `

type User {
  _id: ID!
  username: String!
  email: String!
}

type Auth {
  token: ID
  user: User!
}

type Query {
  user: [User]!
  users: [User]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(username: String!, password: String!): Auth
  logout: Boolean!
}
`;

module.exports = typeDefs;