require('dotenv').config();

const Sequelize = require('sequelize');
const { config, unlokmeDBConn } = require('./index');
const debug = require('debug')('app:db');

const app = new Sequelize(
  unlokmeDBConn.dbName,
  unlokmeDBConn.dbUsername,
  unlokmeDBConn.dbPassword,
  {
    host: unlokmeDBConn.dbHost,
    dialect: unlokmeDBConn.dbDialect,
    timezone: '-05:00', // config timezone
    pool: {
      max: 100,
      min: 50,
      acquire: 60000,
      idle: 20000
    },
    logging: config.dev ? console.log : config.dev
  }
);

class UnlokMeDB {
  constructor() {
    this.client = app;
  }
  connect() {
    if (!UnlokMeDB.connection) {
      UnlokMeDB.connection = new Promise((resolve, reject) => {
        if (!this.client) {
          debug('We have a problem with the connection, please check your env');
          reject('Error');
        }
        debug('Connected succesfully to Sequalize');
        resolve(this.client);
      });
    }
    return this.client;
  }
}

module.exports = UnlokMeDB;