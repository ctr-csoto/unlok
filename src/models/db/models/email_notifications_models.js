/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EmailNotificationsModels = sequelize.define(
    'EmailNotificationsModels',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      new_sub: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      new_tip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      new_message: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      new_media: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'email_notifications_models',
      timestamps: false,
      underscored: true
    }
  );

  EmailNotificationsModels.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      EmailNotificationsModels.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return EmailNotificationsModels;
};