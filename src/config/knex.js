let knex = require("knex");
let slite3 = knex({
    client: 'sqlite3',
    connection: {
        filename: './config/mydb.sqlite'
    }
});
let db = {
    host:'localhost',
    user:'root',
    password:'',
    database:'operaciones'
}

let mysql = knex({
    client: 'mysql',
    connection: {
        ...db
    },
    pool: {min:0, max:10}
});


class Database{
    static client;
    constructor(){
        if(Database.client){
            this.client = Database.client;
            return Database.client;
        }
        Database.client = mysql;
        this.client = Database.client;
    }
}

module.exports = new Database().client;