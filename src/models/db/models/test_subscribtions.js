/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TestSubscribtions = sequelize.define(
    'TestSubscribtions',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      sub_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true
      },
      die: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      emergency: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true
      },
      product: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fix: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      init_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      on_hold: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      reminded_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'test_subscribtions',
      timestamps: false,
      underscored: true
    }
  );

  TestSubscribtions.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      TestSubscribtions.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      TestSubscribtions.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return TestSubscribtions;
};