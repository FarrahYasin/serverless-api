const personModel = require('./schema');

exports.handler = async (event) => {
  const { id } = event.pathParameters;

  try {
    await personModel.delete(id);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Person deleted successfully.' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to delete the person.' }),
    };
  }
};


