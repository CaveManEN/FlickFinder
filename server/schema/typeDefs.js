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
  me: [User]!
  users: [User]
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  
}
`;

module.exports = typeDefs;