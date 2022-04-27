/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminScoutersTrackingHistory = sequelize.define(
    'AdminScoutersTrackingHistory',
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
      account: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      times: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'admin_scouters_tracking_history',
      timestamps: false,
      underscored: true
    }
  );

  AdminScoutersTrackingHistory.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminScoutersTrackingHistory;
};