/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const OldEarningsReferral = sequelize.define(
    'OldEarningsReferral',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ref_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
    },
    {
      tableName: 'old_earnings_referral',
      timestamps: false,
      underscored: true
    }
  );

  OldEarningsReferral.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return OldEarningsReferral;
};