/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminLogin = sequelize.define(
    'AdminLogin',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pass: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_failed_login: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      failed_login_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      S2fa: {
        type: DataTypes.STRING,
        allowNull: true
      },
      privileges: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'admin_login',
      timestamps: false,
      underscored: true
    }
  );

  AdminLogin.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminLogin;
};