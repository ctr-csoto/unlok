const Joi = require('joi');
// const { COMPANY_STATUS_ACTIONS } = require('../utils/constants');
const id = Joi.string();
const userFiles = Joi.any();
const type = Joi.string();
const username = Joi.string();

const uploadInfo = Joi.object({
  id: id.required(),
  userFiles: userFiles,
  type: type.required(),
  username: username.required()
});

module.exports = {
  uploadInfo
};
