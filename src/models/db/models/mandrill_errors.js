/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MandrillErrors = sequelize.define(
    'MandrillErrors',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      email_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'mandrill_errors',
      timestamps: false,
      underscored: true
    }
  );

  MandrillErrors.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return MandrillErrors;
};