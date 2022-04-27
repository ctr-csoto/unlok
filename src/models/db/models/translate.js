/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Translate = sequelize.define(
    'Translate',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      english: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      spanish: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      tableName: 'translate',
      timestamps: false,
      underscored: true
    }
  );

  Translate.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return Translate;
};