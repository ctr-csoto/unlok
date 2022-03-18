/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ChristmasContent = sequelize.define(
    'ChristmasContent',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'christmas_content',
      timestamps: false,
      underscored: true
    }
  );

  ChristmasContent.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ChristmasContent.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ChristmasContent;
};