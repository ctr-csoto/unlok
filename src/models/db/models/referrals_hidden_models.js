/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ReferralsHiddenModels = sequelize.define(
    'ReferralsHiddenModels',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ref_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'referrals',
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
    },
    {
      tableName: 'referrals_hidden_models',
      timestamps: false,
      underscored: true
    }
  );

  ReferralsHiddenModels.associate = (modelsClass) => {
    const { Referrals, Models } = modelsClass;
           
      ReferralsHiddenModels.belongsTo(Referrals, {
        foreignKey: 'ref_id',
        constraints: true
      });
     
      ReferralsHiddenModels.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ReferralsHiddenModels;
};