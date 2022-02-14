const generateRiteWayModels = require('ritewayautotransport_database');
const RitewayDB = require('../config/database');

const ritewayDB = new RitewayDB();

module.exports = generateRiteWayModels(ritewayDB.connect());
