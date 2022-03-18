/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminNotes = sequelize.define(
    'AdminNotes',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ticket_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      admin_name: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_name: {
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
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'admin_notes',
      timestamps: false,
      underscored: true
    }
  );

  AdminNotes.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminNotes;
};