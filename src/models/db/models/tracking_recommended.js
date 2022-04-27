/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TrackingRecommended = sequelize.define(
    'TrackingRecommended',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      part: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'tracking_recommended',
      timestamps: false,
      underscored: true
    }
  );

  TrackingRecommended.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      TrackingRecommended.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      TrackingRecommended.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return TrackingRecommended;
};