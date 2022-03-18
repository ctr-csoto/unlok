/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EpochIpList = sequelize.define(
    'EpochIpList',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'epoch_ip_list',
      timestamps: false,
      underscored: true
    }
  );

  EpochIpList.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EpochIpList;
};