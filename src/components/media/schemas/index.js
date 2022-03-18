const Joi = require('joi');
// const { COMPANY_STATUS_ACTIONS } = require('../utils/constants');
const id = Joi.number().string();
const images = Joi.any();
const videos = Joi.any();


const uploadInfo = Joi.object({
  id: id.required(),
  videos,
  images
});

module.exports = {
  uploadInfo
};
