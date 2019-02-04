const { GraphQLObjectType } = require('graphql');

const addUser = require('./addUser')
const updateUser = require('./updateUser')
const removeUser = require('./removeUser')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser,
    updateUser,
    removeUser,
  }
})

module.exports = Mutation;
