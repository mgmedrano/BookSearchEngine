const { AuthenticationError } = require('apollo-server-express');
const { Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    }
  },
};

module.exports = resolvers;
