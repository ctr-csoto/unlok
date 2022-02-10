const Joi = require('@hapi/joi');

const usernameSchema = Joi.string().email();
const passwordSchema = Joi.string().min(3);
const token = Joi.string().min(20);

const loginSchema = Joi.object({
  username: usernameSchema.required(),
  password: passwordSchema.required()
});

const verifyTokenSchema = Joi.object({
  token: token.required()
});

module.exports = {
  loginSchema,
  verifyTokenSchema
};
