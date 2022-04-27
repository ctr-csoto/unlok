/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Translate3 = sequelize.define(
    'Translate3',
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
      tableName: 'translate3',
      timestamps: false,
      underscored: true
    }
  );

  Translate3.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return Translate3;
};