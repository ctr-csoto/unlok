/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Translate2 = sequelize.define(
    'Translate2',
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
      tableName: 'translate2',
      timestamps: false,
      underscored: true
    }
  );

  Translate2.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return Translate2;
};