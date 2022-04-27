/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const UsersIpLogs = sequelize.define(
    'UsersIpLogs',
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
      ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'users_ip_logs',
      timestamps: false,
      underscored: true
    }
  );

  UsersIpLogs.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      UsersIpLogs.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return UsersIpLogs;
};