const { GraphQLString } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../model/models/user')

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return User.findByIdAndRemove(args.id).exec()
      .then(deletedUser => deletedUser)
      .catch(err => console.log('error ', err))
  }
}
