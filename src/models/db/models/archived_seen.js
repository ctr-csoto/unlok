/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ArchivedSeen = sequelize.define(
    'ArchivedSeen',
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
    },
    {
      tableName: 'archived_seen',
      timestamps: false,
      underscored: true
    }
  );

  ArchivedSeen.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ArchivedSeen;
};