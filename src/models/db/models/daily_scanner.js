/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DailyScanner = sequelize.define(
    'DailyScanner',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sub_earnings_real: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sub_earnings_see: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'daily_scanner',
      timestamps: false,
      underscored: true
    }
  );

  DailyScanner.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return DailyScanner;
};