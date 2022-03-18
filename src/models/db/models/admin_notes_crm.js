/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminNotesCrm = sequelize.define(
    'AdminNotesCrm',
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
        type: DataTypes.INTEGER,
        allowNull: true
      },
      timing: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instagram: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      verified: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      reminder: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      conditionas: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      competitors: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      extra_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'admin_notes_crm',
      timestamps: false,
      underscored: true
    }
  );

  AdminNotesCrm.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminNotesCrm;
};