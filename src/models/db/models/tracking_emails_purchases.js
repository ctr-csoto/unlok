/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TrackingEmailsPurchases = sequelize.define(
    'TrackingEmailsPurchases',
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
      come_from: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      come_to: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'tracking_emails_purchases',
      timestamps: false,
      underscored: true
    }
  );

  TrackingEmailsPurchases.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      TrackingEmailsPurchases.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      TrackingEmailsPurchases.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return TrackingEmailsPurchases;
};