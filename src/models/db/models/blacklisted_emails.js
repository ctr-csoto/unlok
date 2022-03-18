/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const BlacklistedEmails = sequelize.define(
    'BlacklistedEmails',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'blacklisted_emails',
      timestamps: false,
      underscored: true
    }
  );

  BlacklistedEmails.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return BlacklistedEmails;
};