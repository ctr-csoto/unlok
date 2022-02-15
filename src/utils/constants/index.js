require('dotenv').config();
const {
  Role,
  User,
} = require('../../models/index');



let roles;
const COMPANY_ROLES = async () => {
  roles = roles || (await getRoles());

  return roles;
};
const getRoles = async () => {
  const roles = await Role.findAll();
  return buildConstantObject(roles);
};


const buildConstantObject = records => {
  let result = {};
  records.forEach(record => {
    result[`${record.name}`] = record.id;
  });
  return result;
};



/**
 * Times in minutes
 */
const DAYS_INDEX = {
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
  7: 'sunday'
};


module.exports = {
  COMPANY_ROLES
};
