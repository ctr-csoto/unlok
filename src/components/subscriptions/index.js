const { Router } = require("express");
const router = Router();
// const subscriptionController = require("./controllers/subscriptionController")
const validationHandler = require('../../utils/middleware/validationHandler');
const authenticatedUser = require('../../utils/middleware/authenticatedUser');

module.exports = function subscriptionApi(app) {
    app.use("/subscription", router);
    router.use(authenticatedUser);
    router.get('/',(req, res, next)=>{console.log("Testing Subscription..");});
};
