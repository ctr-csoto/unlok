/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelReferralEarnings = sequelize.define(
    'ModelReferralEarnings',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      earning_table: {
        type: DataTypes.STRING,
        allowNull: true
      },
      earning_table_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'model_referral_earnings',
      timestamps: false,
      underscored: true
    }
  );

  ModelReferralEarnings.associate = (modelsClass) => {
    const { Models, Users, Referrals } = modelsClass;
           
      ModelReferralEarnings.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      ModelReferralEarnings.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      ModelReferralEarnings.belongsTo(Referrals, {
        foreignKey: 'ref_id',
        constraints: true
      });
  };

  return ModelReferralEarnings;
};