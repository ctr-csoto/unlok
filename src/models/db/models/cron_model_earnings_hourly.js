/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CronModelEarningsHourly = sequelize.define(
    'CronModelEarningsHourly',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      hour: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: true,
                unique: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'cron_model_earnings_hourly',
      timestamps: false,
      underscored: true
    }
  );

  CronModelEarningsHourly.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return CronModelEarningsHourly;
};