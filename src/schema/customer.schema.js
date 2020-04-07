module.exports = {
  create: {
    body: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        password: {
          type: 'string',
        }
      },
      required: [
        'email',
        'name',
        'password',
      ]
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          email: { type: 'string' },
        },
      },
    },
  }
};
