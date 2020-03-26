const mongoose = require('mongoose');
const connectionStr = 'mongodb+srv://prestondoris:SB1w9OQnLoqIPLOf@tododb-1w5d5.mongodb.net/TodoDB?retryWrites=true&w=majority'

const start = Date.now();
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 3000,
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}
mongoose.connect(connectionStr, opts)
  .then( () => console.log('Connected to MongoDB') )
  .catch( error => console.log(`Caught "${error}" after ${Date.now() - start}`))

module.exports.Todo = require("./todo");