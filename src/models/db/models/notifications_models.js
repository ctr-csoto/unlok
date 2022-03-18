/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const NotificationsModels = sequelize.define(
    'NotificationsModels',
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
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      seen: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'notifications_models',
      timestamps: false,
      underscored: true
    }
  );

  NotificationsModels.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      NotificationsModels.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      NotificationsModels.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return NotificationsModels;
};