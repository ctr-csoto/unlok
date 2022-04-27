/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Godmodels = sequelize.define(
    'Godmodels',
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
      god_mother: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      god_daughter: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      applied: {
        type: DataTypes.DATE,
        allowNull: true
      },
      accepted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      ended: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      start: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'godmodels',
      timestamps: false,
      underscored: true
    }
  );

  Godmodels.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      Godmodels.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Godmodels;
};