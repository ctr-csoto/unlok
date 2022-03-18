/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminLogs = sequelize.define(
    'AdminLogs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      admin: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      action: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'admin_logs',
      timestamps: false,
      underscored: true
    }
  );

  AdminLogs.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminLogs;
};