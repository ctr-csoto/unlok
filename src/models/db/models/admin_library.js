/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminLibrary = sequelize.define(
    'AdminLibrary',
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
      title_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      title_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      description_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      description_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      preview_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      preview_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      video_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      video_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      duration_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      duration_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_library',
      timestamps: false,
      underscored: true
    }
  );

  AdminLibrary.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminLibrary;
};