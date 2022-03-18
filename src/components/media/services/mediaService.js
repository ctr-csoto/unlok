const { Users } = require('../../../models/index');
const ResourceService = require('../../../utils/resource/resourceService');
const UnlokMeDB = require('../../../config/database');
const unlokMeDB = new UnlokMeDB().connect();
const schemas = require('./schemas');

class Media extends ResourceService {
  constructor() {
    super(Users, Users.name);
  }

  getRolInclude() {
    return {}
    // return {
    //   model: Role,
    //   as: 'role',
    //   required: true
    // };
  }

  async getUser(id, optQuery = {}) {
    let query = {
      ...optQuery,
      attributes: {exclude: ['password', 'token', 'rol_id']},
      include: this.getRolInclude(),
      paranoid: false
    };
    const user = await User.findByPk(id, query);
    return user;
  }

  async getUserByUsername(username, enabledReq = true) {
    let query = {
      include: this.getRolInclude(),
      paranoid: false
    };

    let where = {
      username
    };

    if (enabledReq) where.enabled = true;

    const user = await User.findOne({ ...query, where });
    return user;
  }
  
}

module.exports = new Media();
