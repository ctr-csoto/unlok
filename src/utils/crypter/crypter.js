const bcrypt = require('bcrypt');
const { config } = require('../../config');

const comparePasswords = async (firstPassword, secondPassword) => {
  return await bcrypt.compare(firstPassword, secondPassword);
};

const encryptPassword = async plainInPassword => {
  const hashPassword = await bcrypt.hash(plainInPassword, config.saltCrypt);
  return hashPassword;
};

module.exports = {
  comparePasswords,
  encryptPassword
};
