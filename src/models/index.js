
const generateUnlokmeModels = require('./db_test');
const UnlokmeDB = require('../config/database');
const unlokmeDB = new UnlokmeDB();

module.exports = generateUnlokmeModels(unlokmeDB.connect());