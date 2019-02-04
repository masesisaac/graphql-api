const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  gender: { type: String, enum: ['male', 'female']},
  email: String,
  about: String,
  registered: { type: String, default: (new Date()).toISOString() },
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel
