/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminNotesBlacklist = sequelize.define(
    'AdminNotesBlacklist',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      note: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      image: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sub: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_notes_blacklist',
      timestamps: false,
      underscored: true
    }
  );

  AdminNotesBlacklist.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminNotesBlacklist;
};