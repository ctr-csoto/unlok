const { initializeModels } = require('./models');

module.exports = (sequelize) => {
    return initializeModels(sequelize);
};