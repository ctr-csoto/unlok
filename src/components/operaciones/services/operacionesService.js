let oplib = require("coderclaseoperaciones")
let DAOS = require("../../../MODEL/DAOS")
class Operacion{
  static Data = [];
  async resolver(a = 0, b = 0, op= 'suma') {
    let res = await oplib[op](a,b);
    await DAOS.save({
      operacion:op,
      num1:a,
      num2:b,
      resultado: res,
      fecha: new Date
    });
    // Operacion.Data.push({
    //   operacion:op,
    //   num1:a,
    //   num2:b,
    //   resultado: res,
    //   fecha: new Date
    // })
    return res;
  }

  async getAll() {
    // return Operacion.Data;
    return DAOS.getAll();
  }
  
}

module.exports = new Operacion();
