/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsIpLogs = sequelize.define(
    'ModelsIpLogs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'models_ip_logs',
      timestamps: false,
      underscored: true
    }
  );

  ModelsIpLogs.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ModelsIpLogs;
};