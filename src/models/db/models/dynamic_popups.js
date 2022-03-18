/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DynamicPopups = sequelize.define(
    'DynamicPopups',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      images_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      images_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receivers: {
        type: DataTypes.STRING,
        allowNull: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: true
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'dynamic_popups',
      timestamps: false,
      underscored: true
    }
  );

  DynamicPopups.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return DynamicPopups;
};