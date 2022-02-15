const boom = require('@hapi/boom');
const UserService = require('../../user/services/userService');
const { config } = require('../../../config/index');
const Crypter = require('../../../utils/crypter/crypter');
const JWTService = require('../../../utils/JWT/JWTService');

class AuthService {
  static async login(username, password) {
    const message = 'Email or password is incorrect';
    const user = await UserService.getUserByUsername(username);
    if (!user) throw boom.notFound(message);
    const success = await Crypter.comparePasswords(password, user.password);
    if (!success) throw boom.unauthorized(message);
    const token = await JWTService.generate({ id: user.id });
    let response = {
      user,
      token,
      type: 'Bearer',
      expires_in: config.expireTimeToken
    };

    return response;
  }

  static async verifyToken(token) {
    const verification = await JWTService.verify(token);

    if (!verification) throw boom.unauthorized('Token invalid');

    const payload = await JWTService.decode(token);
    const user = await UserService.getUser(payload.id);

    if (!user) throw boom.notFound('Email or password is incorrect');

    return user;
  }
}

module.exports = AuthService;
