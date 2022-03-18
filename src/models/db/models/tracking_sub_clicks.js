/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TrackingSubClicks = sequelize.define(
    'TrackingSubClicks',
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
      clicks: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'tracking_sub_clicks',
      timestamps: false,
      underscored: true
    }
  );

  TrackingSubClicks.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      TrackingSubClicks.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return TrackingSubClicks;
};