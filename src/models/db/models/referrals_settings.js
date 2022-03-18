/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ReferralsSettings = sequelize.define(
    'ReferralsSettings',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      referral_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'referrals',
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
      initial_commission: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      final_commission: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      tableName: 'referrals_settings',
      timestamps: false,
      underscored: true
    }
  );

  ReferralsSettings.associate = (modelsClass) => {
    const { Referrals, Models } = modelsClass;
           
      ReferralsSettings.belongsTo(Referrals, {
        foreignKey: 'referral_id',
        constraints: true
      });
     
      ReferralsSettings.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ReferralsSettings;
};