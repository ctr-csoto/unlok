/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AvoidModelsLinks = sequelize.define(
    'AvoidModelsLinks',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      link: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'avoid_models_links',
      timestamps: false,
      underscored: true
    }
  );

  AvoidModelsLinks.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AvoidModelsLinks;
};