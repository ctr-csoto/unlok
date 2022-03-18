/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GodConcept = sequelize.define(
    'GodConcept',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      hash: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      god_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_ended: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'god_concept',
      timestamps: false,
      underscored: true
    }
  );

  GodConcept.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      GodConcept.belongsTo(Models, {
        foreignKey: 'god_id',
        constraints: true
      });
     
      GodConcept.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return GodConcept;
};