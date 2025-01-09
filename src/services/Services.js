const database = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll() {
    return database[this.model].findAll();
  }
}

module.exports = Services;
