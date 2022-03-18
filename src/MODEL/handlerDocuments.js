const fs = require("fs");
class HandlerDocuments {
    constructor(url){
        this.url = url;
    }

    async getAll(){
        try {
            let res = await fs.promises.readFile(`${this.url}`, 'utf-8');
            return JSON.parse(res);
        } catch (error) {
            console.log(error);
        }
    }

    async save(data){
        try {
            let getData = await this.getAll();
            getData.push(data)
            return await fs.promises.writeFile(`${this.url}`, JSON.stringify(getData,false,2));
        } catch (error) {
            console.log(error);
        }
    }

    async appenDocument(data){
        try {
            return await fs.promises.appendFile(`${this.url}`, data);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteDocument(){
        try {
            return await fs.promises.unlink(`${this.url}`);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new HandlerDocuments('data.json');