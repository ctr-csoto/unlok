/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminClosersLinks = sequelize.define(
    'AdminClosersLinks',
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
      link: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      assigned_to: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_assigned: {
        type: DataTypes.DATE,
        allowNull: true
      },
      repeats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'admin_closers_links',
      timestamps: false,
      underscored: true
    }
  );

  AdminClosersLinks.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminClosersLinks;
};