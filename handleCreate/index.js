const personModel = require('./schema');

exports.handler = async (event) => {
  const { name} = JSON.parse(event.body);

  try {
    const person = await personModel.create({ name});
    return {
      statusCode: 201, // 201 Created status code for successful creation
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create the person.' }),
    };
  }
};