/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsTelegramNotifications = sequelize.define(
    'ModelsTelegramNotifications',
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
      all: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      new_sub: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      cancel: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      expired: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      new_unlok_plus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      new_comment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      like: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      tips: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ads: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      private_media: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'models_telegram_notifications',
      timestamps: false,
      underscored: true
    }
  );

  ModelsTelegramNotifications.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsTelegramNotifications.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelsTelegramNotifications;
};