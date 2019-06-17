import fakedata from '../../fakedata'

const resolvers = {
  Query: {
    todos: () => fakedata,
  },
};

module.exports = resolvers