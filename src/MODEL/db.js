let dbase = require("../config/knex");
class DB {
    constructor(url){
        this.url = url;
    }

    async check(){
        try {
            const res = await dbase.schema.hasTable('operaciones')
            return res;
        } catch (error) {
            
        }
    }

    async save(obj){
        try {
            if(this.check()){
                return await dbase.from('operaciones').insert(obj);
            }else{
                await this.createTable();
                await dbase.from('operaciones').insert(obj);
            }
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            if(this.check()){
                return await dbase.from('operaciones').select('id', 'operacion', 'num1', 'num2', 'resultado', 'fecha');
            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async createTable(){
        try {
            let opTable = await dbase.schema.createTable('operaciones', table =>{
                table.increments("id").primary();
                table.string("operacion");
                table.integer("num1");
                table.integer("num2");
                table.integer("resultado");                
                table.string("fecha");
            });
            return opTable;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new DB();