/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DailyEmails = sequelize.define(
    'DailyEmails',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'daily_emails',
      timestamps: false,
      underscored: true
    }
  );

  DailyEmails.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return DailyEmails;
};