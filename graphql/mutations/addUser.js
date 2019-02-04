const { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLEnumType } = require('graphql');
const userGraphQLType = require('../types/userType');
const User = require('../../model/models/user')

module.exports = {
  type: userGraphQLType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt },
    gender: { type:  GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    about: { type: GraphQLString },
    registered: { type: GraphQLString },
  },
  resolve(parent, args) {
    const newUser = new User({
      id: args.id,
      name: args.name,
      age: args.age,
      gender: args.gender,
      company: args.company,
      email: args.email,
      phone: args.phone,
      address: args.address,
      about: args.about,
      registered: args.registered,
    })

    return newUser.save();
  }
}
