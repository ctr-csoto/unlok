/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminClosers = sequelize.define(
    'AdminClosers',
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
      email1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pw_hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      email_case_1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      email_case_2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      privileges: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email2: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'admin_closers',
      timestamps: false,
      underscored: true
    }
  );

  AdminClosers.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminClosers;
};