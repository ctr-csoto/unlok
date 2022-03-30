const { Users } = require('../../../models/index');
const mediaService = require('../services/mediaService');
const UnlokMeDB = require('../../../config/database');
const unlokMeDB = new UnlokMeDB().connect();

class Media {

  async uploadResource(req,res,next) {
    try {
      let response = await mediaService.uploadResource(req.body, req.files);
      console.log(response);
      res.json(response);
    } catch (error) {
      console.log(error); 
    }
  }

  async testing(req,res,next) {
    console.log("ashdahsodihasoidoasidhoiasnd");
    try {
      let response = await mediaService.threadsWaterMaker(req.body, req.files);
      res.json([]);
    } catch (error) {
      console.log(error); 
    }
  }
  
}

module.exports = new Media();
