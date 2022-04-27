/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const VisitedArchive = sequelize.define(
    'VisitedArchive',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'visited_archive',
      timestamps: false,
      underscored: true
    }
  );

  VisitedArchive.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return VisitedArchive;
};