/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CcbillLog = sequelize.define(
    'CcbillLog',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      clientAccnum: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      clientSubacc: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      eventGroupType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      request: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      data: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      sub: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'ccbill_log',
      timestamps: false,
      underscored: true
    }
  );

  CcbillLog.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return CcbillLog;
};