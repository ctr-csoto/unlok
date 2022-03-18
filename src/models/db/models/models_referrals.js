/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsReferrals = sequelize.define(
    'ModelsReferrals',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ref_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'models_referrals',
      timestamps: false,
      underscored: true
    }
  );

  ModelsReferrals.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsReferrals.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      ModelsReferrals.belongsTo(Models, {
        foreignKey: 'ref_id',
        constraints: true
      });
  };

  return ModelsReferrals;
};