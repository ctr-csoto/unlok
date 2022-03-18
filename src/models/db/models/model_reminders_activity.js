/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelRemindersActivity = sequelize.define(
    'ModelRemindersActivity',
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
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'model_reminders_activity',
      timestamps: false,
      underscored: true
    }
  );

  ModelRemindersActivity.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelRemindersActivity.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelRemindersActivity;
};