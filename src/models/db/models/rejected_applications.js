/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const RejectedApplications = sequelize.define(
    'RejectedApplications',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'rejected_applications',
      timestamps: false,
      underscored: true
    }
  );

  RejectedApplications.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return RejectedApplications;
};