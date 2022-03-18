/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EventNotifications = sequelize.define(
    'EventNotifications',
    {
      
      en_or_idx: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      en_signupdate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      en_eventdate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      en_transaction_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      en_pi_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      en_reseller: {
        type: DataTypes.STRING,
        allowNull: true
      },
      en_eventcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'EventNotifications',
      timestamps: false,
      underscored: true
    }
  );

  EventNotifications.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EventNotifications;
};