/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Tips = sequelize.define(
    'Tips',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'tips',
      timestamps: false,
      underscored: true
    }
  );

  Tips.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      Tips.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Tips.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return Tips;
};