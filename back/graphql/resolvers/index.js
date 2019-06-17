import fakedata from '../../fakedata'

const resolvers = {
  Query: {
    todoDatas: () => fakedata,
  },
};

module.exports = resolvers