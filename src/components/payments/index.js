const { Router } = require("express");
const router = Router();
// const paymentController = require("./controllers/paymentController")
const validationHandler = require('../../utils/middleware/validationHandler');
const authenticatedUser = require('../../utils/middleware/authenticatedUser');

module.exports = function paymentApi(app) {
    app.use("/payment", router);
    router.use(authenticatedUser);
    router.get('/',(req, res, next)=>{console.log("Testing Payment..");});
};
