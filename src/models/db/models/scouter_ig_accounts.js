/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ScouterIgAccounts = sequelize.define(
    'ScouterIgAccounts',
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
      assigned: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'scouter_ig_accounts',
      timestamps: false,
      underscored: true
    }
  );

  ScouterIgAccounts.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ScouterIgAccounts;
};