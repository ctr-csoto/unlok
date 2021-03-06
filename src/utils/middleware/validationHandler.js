const boom = require('@hapi/boom');
const Joi = require('joi');

function validate(data, schema) {
  if (!Joi.isSchema(schema)) {
    schema = Joi.object(schema);
  }
  const { error } = schema.validate(data);
  return error;
}

function validationHandler(schema, check = 'body') {
  return function(req, res, next) {
    const error = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
