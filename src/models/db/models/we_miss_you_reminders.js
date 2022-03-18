/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const WeMissYouReminders = sequelize.define(
    'WeMissYouReminders',
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
      period: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'we_miss_you_reminders',
      timestamps: false,
      underscored: true
    }
  );

  WeMissYouReminders.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      WeMissYouReminders.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return WeMissYouReminders;
};