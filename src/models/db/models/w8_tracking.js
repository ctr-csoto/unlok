/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const W8Tracking = sequelize.define(
    'W8Tracking',
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
      action: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      filename: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'w8_tracking',
      timestamps: false,
      underscored: true
    }
  );

  W8Tracking.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      W8Tracking.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return W8Tracking;
};