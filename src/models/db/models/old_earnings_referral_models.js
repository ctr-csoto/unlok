/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const OldEarningsReferralModels = sequelize.define(
    'OldEarningsReferralModels',
    {
      
      model: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true
      },
      referral: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'old_earnings_referral_models',
      timestamps: false,
      underscored: true
    }
  );

  OldEarningsReferralModels.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return OldEarningsReferralModels;
};