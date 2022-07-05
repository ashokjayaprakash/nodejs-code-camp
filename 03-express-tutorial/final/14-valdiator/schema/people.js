const createPersonSchema = {
    name: {
      isUppercase: {
        // To negate a validator
        negated: true,
      }
    },
    // Support bail functionality in schemas
    email: {
      isEmail: {
        bail: true,
      },
    },
    // Wildcards/dots for nested fields work as well
    'addresses.postalCode': {
      // Make this field optional when undefined or null
      optional: { options: { nullable: true } },
      isPostalCode: {
        options: 'IN', // set postalCode locale here
      },
    },
  }

  const getPersonSchema = {
    id: {
        // The location of the field, can be one or more of body, cookies, headers, params or query.
        // If omitted, all request locations will be checked
        in: ['params'],
        errorMessage: 'ID is wrong',
        isInt: true,
        // Sanitizers can go here as well
        // toInt: true,
      },
  }

  module.exports = {
    createPersonSchema,
    getPersonSchema
  }