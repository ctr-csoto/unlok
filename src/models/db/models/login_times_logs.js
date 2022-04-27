/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const LoginTimesLogs = sequelize.define(
    'LoginTimesLogs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'login_times_logs',
      timestamps: false,
      underscored: true
    }
  );

  LoginTimesLogs.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      LoginTimesLogs.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return LoginTimesLogs;
};