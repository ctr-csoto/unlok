const { Users } = require('../../../models/index');
const ResourceService = require('../../../utils/resource/resourceService');
const UnlokMeDB = require('../../../config/database');
const unlokMeDB = new UnlokMeDB().connect();

class Media {

  async uploadResource(req,res,next) {
    try {
      console.log(req.files);
      res.send("ok");;
    } catch (error) {
      console.log(error); 
    }
  }
  
}

module.exports = new Media();
