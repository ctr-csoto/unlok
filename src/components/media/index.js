const { Router } = require("express");
const router = Router();
const mediaController = require("./controllers/mediaController")
const validationHandler = require('../../utils/middleware/validationHandler');
const authenticatedUser = require('../../utils/middleware/authenticatedUser');
const UploadFilesMiddleware = require('./middlewares/uploadFileMiddleware');
const schemas = require('./schemas');

module.exports = function mediaApi(app) {
    app.use("/media", router);
    router.post('/uploadservice',[validationHandler(schemas.uploadInfo, 'body'),UploadFilesMiddleware.uploadFile()],mediaController.uploadResource);
    router.use(authenticatedUser);
    router.get('/',(req, res, next)=>{console.log("Testing Media..");});
};
