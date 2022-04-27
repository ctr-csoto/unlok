const { Router } = require("express");
const router = Router();
const mediaController = require("./controllers/mediaController");
const {
    parseBodyParamsToObject
  } = require('../../utils/middleware/parseParamsToObject');
const validationHandler = require('../../utils/middleware/validationHandler');
const authenticatedUser = require('../../utils/middleware/authenticatedUser');
const UploadFilesMiddleware = require('./middlewares/uploadFileMiddleware');
const schemas = require('./schemas');

module.exports = function mediaApi(app) {
    app.use("/media", router);
    
    router.get('/testing',[
        UploadFilesMiddleware.uploadFile(),
        parseBodyParamsToObject
    ],
    mediaController.testing);
    router.post('/uploadservice',[
        UploadFilesMiddleware.uploadFile(),
        parseBodyParamsToObject,
        validationHandler(schemas.uploadInfo, 'body')
    ],mediaController.uploadResource);
    router.get('/',(req, res, next)=>{console.log("Testing Media..");});
};
