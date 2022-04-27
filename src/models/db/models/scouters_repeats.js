/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ScoutersRepeats = sequelize.define(
    'ScoutersRepeats',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      link: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      repeats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'scouters_repeats',
      timestamps: false,
      underscored: true
    }
  );

  ScoutersRepeats.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ScoutersRepeats;
};