/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminScouters = sequelize.define(
    'AdminScouters',
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
      email: {
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
      repeats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'admin_scouters',
      timestamps: false,
      underscored: true
    }
  );

  AdminScouters.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminScouters;
};