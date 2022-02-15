
const generateUnlokmeModels = require('./db');
const UnlokmeDB = require('../config/database');
const unlokmeDB = new UnlokmeDB();

module.exports = generateUnlokmeModels(unlokmeDB.connect());