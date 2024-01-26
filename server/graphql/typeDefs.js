const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
 
    
    user: User
   
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
  
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
