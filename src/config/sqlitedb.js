const Sequelize = require('sequelize');
const { config } = require("./index")

const sqlite = new Sequelize({
    dialect: 'sqlite',
    storage: './db/testingdb.sqlite'
  });

class SqliteDatabase {
    static client;
    constructor() {
        if (SqliteDatabase.client) {
            this.client = SqliteDatabase.client;
            return this;
        }
        SqliteDatabase.client = sqlite;
        this.client = SqliteDatabase.client;
    }
}

const db_sqlite = new SqliteDatabase()

module.exports = { db_sqlite }