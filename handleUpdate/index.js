const personModel = require('../schema');

exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const { name} = JSON.parse(event.body);

  try {
    const person = await personModel.update({ id, name });
    return {
      statusCode: 200,
      body: JSON.stringify(person),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update the person.' }),
    };
  }
};

