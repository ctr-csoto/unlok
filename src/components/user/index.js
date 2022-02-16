const { Router } = require("express");
const router = Router();
// const userController = require("./controllers/userController")
const validationHandler = require('../../utils/middleware/validationHandler');
const authenticatedUser = require('../../utils/middleware/authenticatedUser');

module.exports = function userApi(app) {
    app.use("/user", router);
    router.use(authenticatedUser);
    router.get('/',(req, res, next)=>{console.log("Testing User..");});
};
