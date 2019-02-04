const { GraphQLList } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../model/models/user')

module.exports = {
  type: new GraphQLList(userGraphQLType),
  args: {},
  resolve() {
    return User.find({})
  }
}
