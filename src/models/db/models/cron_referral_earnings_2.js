/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CronReferralEarnings2 = sequelize.define(
    'CronReferralEarnings2',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ref_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'cron_referral_earnings_2',
      timestamps: false,
      underscored: true
    }
  );

  CronReferralEarnings2.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return CronReferralEarnings2;
};