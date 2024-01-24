// import signToken, AuthentificationError and User model.
const { signToken, AuthenticationError } = require('../utils/auth');
const { User } = require('../models');

// Queries and Mutations that we can use in graphql(apollo sandbox).
const resolvers = {

    // Queries
    Query: {
        // A query to get all users.
        users: async () => {
            return User.find().populate('movies');
        },
        // Query to get a specific user
        user: async (parents, { username }) => {
            return User.findOne({ username }).populate('movies');
        }
    },

    // Mutations
    Mutation: {
        // mutation to add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);

            //assign JWT token to user created
            const token = signToken(user);

            // send back user with the token to the front end
            return { token, user };
        },

        // mutation for a user login
        login: async (parent, { email, password}) => {
            // find user by their email
            const user = await User.findOne({ email });

            // error if no user is found 
            if (!user) {
                throw AuthenticationError
            }

            // check the user's password
            const correctPw = await user.isCorrectPassword(password);

            // If the password is incorrect, throw error
            if (!correctPw) {
                throw AuthenticationError
            }

            // if password is correct, return a user and their token to front end
            const token = signToken(user);
            return { user, token };
        }
    }
}

module.exports = resolvers;