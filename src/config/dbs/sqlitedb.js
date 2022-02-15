const Sequelize = require('sequelize');
const { config } = require("./index")

const sqlite = new Sequelize({
    dialect: 'sqlite',
    storage: './db/testingdb.sqlite'
  });


  class Database{
    static client;
    constructor(){
        if(Database.client){
            return Database.client;
        }
        Database.client = sqlite;
        this.client = Database.client;
    }
  }
  module.exports = new Database().client;