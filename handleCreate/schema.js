
const dynamoose = require('dynamoose');
const personSchema = new dynamoose.Schema({

  id: {
    type: String,
    // hashKey: true, // Partition key
  },

  name: {
    type: String,
    // required: true,
  }
}); 

const personModel = dynamoose.model('Person', personSchema);
module.exports = personModel;

