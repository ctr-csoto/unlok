/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EnteredModels = sequelize.define(
    'EnteredModels',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instagram: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_contacted: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'entered_models',
      timestamps: false,
      underscored: true
    }
  );

  EnteredModels.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EnteredModels;
};