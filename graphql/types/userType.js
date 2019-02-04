const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    email: { type: GraphQLString },
    about: { type: GraphQLString },
    registered: { type: GraphQLString },
  })
})

module.exports = UserType
