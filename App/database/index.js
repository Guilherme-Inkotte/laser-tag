require('dotenv').config()
var mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(
    console.log('Conectado ao banco')
  )
  .catch(err => {
    console.log(err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;