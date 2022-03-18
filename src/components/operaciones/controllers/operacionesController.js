const operacionService = require("../services/operacionesService")

class Operacion {

  async resolver(req,res,next) {
    try {
      let {a, b} = req.query;
      let {operacion} = req.params;
      let response = await operacionService.resolver(Number(a),Number(b),operacion);
      res.send(`${response}`);
    } catch (error) {
      console.log(error); 
    }
  }

  async getAll(req,res,next) {
    try {
      let response = await operacionService.getAll();
      res.json(response);
    } catch (error) {
      console.log(error); 
    }
  }

  
  
}

module.exports = new Operacion();
