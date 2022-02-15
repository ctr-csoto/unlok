const boom = require('@hapi/boom');
const ResourceService = require('./resourceService');

class ResourceController {
  constructor(options) {
    if (!(options.service || options.model)) {
      throw new Error('Options parameter must have Service or Model object');
    }

    if (options.service) {
      this.resourceService = options.service;
    } else {
      this.resourceService = new ResourceService(
        options.model,
        options.model.name
      );
    }
  }
}

module.exports = ResourceController;
