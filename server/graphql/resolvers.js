const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    
   

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

       

        return user;
      }

      throw AuthenticationError;
    },
    

  },
  Mutation: {
    addUser: async (parent, args) => {
        console.log("add user",args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
   
    login: async (parent, { email, password }) => {
        console.log("login",email, password);
      const user = await User.findOne({ email });
        console.log(user)
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
