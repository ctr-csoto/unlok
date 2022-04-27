/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const W8FormColour = sequelize.define(
    'W8FormColour',
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
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'w8_form_colour',
      timestamps: false,
      underscored: true
    }
  );

  W8FormColour.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      W8FormColour.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return W8FormColour;
};