const { Router } = require("express");
const router = Router();
const authHandler = require("./controllers/authController")
const validationHandler = require('../../utils/middleware/validationHandler');
// const AuthMiddleware = require('./middlewares/authMiddleware');
// const { verifyRole } = require('./middlewares/authMiddleware');
const { loginSchema, verifyTokenSchema } = require('./schemas/index');

module.exports = function authApi(app) {
    app.use("/auth", router);
    //   router.use(AuthMiddleware.getAuthenticatedUser);
    router.post(
        '/login',
        validationHandler(loginSchema),
        authHandler.loginController
    );
};
