/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelEarningsButton = sequelize.define(
    'ModelEarningsButton',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      part: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      day_from: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      day_to: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'model_earnings_button',
      timestamps: false,
      underscored: true
    }
  );

  ModelEarningsButton.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ModelEarningsButton;
};