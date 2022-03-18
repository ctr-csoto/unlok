/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const NotificationsUsers = sequelize.define(
    'NotificationsUsers',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      event: {
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
      media: {
        type: DataTypes.STRING,
        allowNull: true
      },
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'notifications_users',
      timestamps: false,
      underscored: true
    }
  );

  NotificationsUsers.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      NotificationsUsers.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      NotificationsUsers.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return NotificationsUsers;
};