const boom = require('@hapi/boom');
const JWTService = require('../../../utils/JWTService');
const { User, Role } = require('../../../models');

class AuthMiddleware {
  static async getAuthenticatedUser(req, res, next) {
    try {
      const authorization = req.headers.authorization || '';
      const token = authorization.split(' ')[1];
      if (await JWTService.verify(token)) {
        
        let payload = await JWTService.decode(token);
        let user = await User.findByPk(payload.id, {
          include: [{ model: Role, as: 'role' }]
        });
        if (user != null) {
          await user.update({ token: token });
          req.user = user;
          req.user.token = token;

          next();
        } else {
          next(boom.unauthorized());
        }
      } else {
        next(boom.unauthorized());
      }
    } catch (error) {
      next(boom.internal(error));
    }
  }

  static verifyRole(...roles) {
    return function(req, res, next) {
      if (req.user.role.name === 'super_admin') return next();
      const success = !!(req.user && roles.includes(req.user.role.name));
      if (success) {
        next();
      } else {
        next(
          boom.forbidden("You don't have permission to access this resource.")
        );
      }
    };
  }
}

module.exports = AuthMiddleware;
