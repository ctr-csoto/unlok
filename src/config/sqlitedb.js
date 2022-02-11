const knex = require("knex");
const { config } = require("./index")

const sqlite = knex({
    client: 'sqlite3',
    connection: {
        filename: "./db/operaciones.sqlite"
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 10 }
})

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