const { GraphQLString, GraphQLInt } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../model/models/user')

module.exports = {
  type: userGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    gender: { type: GraphQLString },
    email: { type: GraphQLString },
    about: { type: GraphQLString },
  },
  resolve(parent, args) {
    return User.findById(args.id)
      .then(user => {
        user.name = args.name ? args.name : user.name
        user.age = args.age ? args.age : user.age
        user.gender = args.gender ? args.gender : user.gender
        user.company = args.company ? args.company : user.company
        user.email = args.email ? args.email : user.email
        user.phone = args.phone ? args.phone : user.phone
        user.address = args.address ? args.address : user.address
        user.about = args.about ? args.about : user.about
        user.registered = args.registered ? args.registered : user.registered

        return user.save()
      })
      .then(updatedUser => updatedUser)
      .catch(err => console.log('error ', err))
  }
}
