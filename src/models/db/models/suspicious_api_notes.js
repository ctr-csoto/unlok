/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const SuspiciousApiNotes = sequelize.define(
    'SuspiciousApiNotes',
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
      case_id: {
        type: DataTypes.INTEGER,
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
    },
    {
      tableName: 'suspicious_api_notes',
      timestamps: false,
      underscored: true
    }
  );

  SuspiciousApiNotes.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return SuspiciousApiNotes;
};