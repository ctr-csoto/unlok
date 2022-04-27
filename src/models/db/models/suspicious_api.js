/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const SuspiciousApi = sequelize.define(
    'SuspiciousApi',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      proxy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      billing: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      threat: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      cron_msg: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      },
      freeze: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      suspend: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'suspicious_api',
      timestamps: false,
      underscored: true
    }
  );

  SuspiciousApi.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      SuspiciousApi.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return SuspiciousApi;
};