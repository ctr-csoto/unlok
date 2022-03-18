/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsSelling = sequelize.define(
    'ModelsSelling',
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
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'models_selling',
      timestamps: false,
      underscored: true
    }
  );

  ModelsSelling.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsSelling.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelsSelling;
};