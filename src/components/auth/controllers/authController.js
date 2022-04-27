const AuthService = require('../services/authServices');
class AuthController {
  async loginController(req, res, next) {
    try {
      const { username, password } = req.body;
      const response = await AuthService.login(username, password);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async verifyTokenController(req, res, next) {
    try {
      const { token } = req.body;
      const response = await AuthService.verifyToken(token);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
