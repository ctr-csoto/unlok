const boom = require('@hapi/boom');

class ResourceService {
  constructor(Model, modelLabel) {
    this.Model = Model;
    this.modelLabel = modelLabel;
  }

  setModel(Model, modelLabel) {
    this.Model = Model;
    this.modelLabel = modelLabel;
  }

  async getIncludeQuery() {
    return [];
  }
}

module.exports = ResourceService;
