const { GraphQLObjectType } = require('graphql');

const queryAllUsers = require('./queryAllUsers');
const queryUserById = require('./queryUserById');

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllUsers,
    queryUserById,
  }
})
