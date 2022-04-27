/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const PasswordRequests = sequelize.define(
    'PasswordRequests',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'password_requests',
      timestamps: false,
      underscored: true
    }
  );

  PasswordRequests.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      PasswordRequests.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return PasswordRequests;
};