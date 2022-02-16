const AuthMiddleware = require('../../components/auth/middlewares/authMiddleware');

const authenticatedUser = [
  AuthMiddleware.getAuthenticatedUser
];
module.exports = authenticatedUser;
