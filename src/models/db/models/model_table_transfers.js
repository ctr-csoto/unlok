/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelTableTransfers = sequelize.define(
    'ModelTableTransfers',
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
      from_table: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      to_table: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'model_table_transfers',
      timestamps: false,
      underscored: true
    }
  );

  ModelTableTransfers.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelTableTransfers.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelTableTransfers;
};