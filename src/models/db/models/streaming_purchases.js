/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const StreamingPurchases = sequelize.define(
    'StreamingPurchases',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      stream_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'streaming',
          key: 'id'
        }
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'streaming_purchases',
      timestamps: false,
      underscored: true
    }
  );

  StreamingPurchases.associate = (modelsClass) => {
    const { Models, Users, Streaming } = modelsClass;
           
      StreamingPurchases.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      StreamingPurchases.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      StreamingPurchases.belongsTo(Streaming, {
        foreignKey: 'stream_id',
        constraints: true
      });
  };

  return StreamingPurchases;
};