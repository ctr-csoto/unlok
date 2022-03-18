/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Streaming = sequelize.define(
    'Streaming',
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
      link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      session: {
        type: DataTypes.STRING,
        allowNull: true
      },
      token: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
        defaultValue: 0.00
      },
      is_paid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      is_private: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      private_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'streaming',
      timestamps: false,
      underscored: true
    }
  );

  Streaming.associate = (modelsClass) => {
    const { Models, Users, StreamingEmailReminders, StreamingPurchases } = modelsClass;
           
      Streaming.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Streaming.belongsTo(Users, {
        foreignKey: 'private_user_id',
        constraints: true
      });
     
      Streaming.hasMany(StreamingEmailReminders, {
        foreignKey: {
          name: 'stream_id',
          allowNull: false
        },
        constraints: true
      });
     
      Streaming.hasMany(StreamingPurchases, {
        foreignKey: {
          name: 'stream_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Streaming;
};