const mongoose = require('mongoose');

const initDB = () => {

  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to db')
  });

  mongoose.connection.on('error', (err) => {
    console.log('an error occured: ', err.message)
  })

}

module.exports = initDB
