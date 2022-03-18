let HandlerDocuments = require("./handlerDocuments");
let sql = require("./db")

class DAOS {
    constructor(type){
        this.dao = type == "sql" ? sql : HandlerDocuments;

    }
    async save(obj={}){
        try {
            this.dao.save(obj);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            return this.dao.getAll();
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DAOS("asdasdasd");