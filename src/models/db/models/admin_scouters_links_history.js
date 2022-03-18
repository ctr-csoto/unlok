/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminScoutersLinksHistory = sequelize.define(
    'AdminScoutersLinksHistory',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      link_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      action: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'admin_scouters_links_history',
      timestamps: false,
      underscored: true
    }
  );

  AdminScoutersLinksHistory.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminScoutersLinksHistory;
};