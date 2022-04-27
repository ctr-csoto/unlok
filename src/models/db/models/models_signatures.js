/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsSignatures = sequelize.define(
    'ModelsSignatures',
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
      signature: {
        type: DataTypes.BLOB,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'models_signatures',
      timestamps: false,
      underscored: true
    }
  );

  ModelsSignatures.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsSignatures.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelsSignatures;
};