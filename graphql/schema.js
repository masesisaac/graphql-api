const { GraphQLSchema } = require('graphql');
const RootQuery = require('./queries/rootQuery')
const Mutations = require('./mutations')

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})

module.exports = Schema 
