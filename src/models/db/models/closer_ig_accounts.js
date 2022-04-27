/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CloserIgAccounts = sequelize.define(
    'CloserIgAccounts',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      account_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      account_pw: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      followers: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      url: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      assigned_to: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'closer_ig_accounts',
      timestamps: false,
      underscored: true
    }
  );

  CloserIgAccounts.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return CloserIgAccounts;
};