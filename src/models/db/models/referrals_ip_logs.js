/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ReferralsIpLogs = sequelize.define(
    'ReferralsIpLogs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'referrals_ip_logs',
      timestamps: false,
      underscored: true
    }
  );

  ReferralsIpLogs.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ReferralsIpLogs;
};