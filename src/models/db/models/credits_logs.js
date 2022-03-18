/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CreditsLogs = sequelize.define(
    'CreditsLogs',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      sub_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true
      },
      method: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'normal'
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'credits_logs',
      timestamps: false,
      underscored: true
    }
  );

  CreditsLogs.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      CreditsLogs.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return CreditsLogs;
};