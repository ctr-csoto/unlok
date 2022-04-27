/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const StoriesPurchases = sequelize.define(
    'StoriesPurchases',
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
      story_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'stories_purchases',
      timestamps: false,
      underscored: true
    }
  );

  StoriesPurchases.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      StoriesPurchases.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      StoriesPurchases.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return StoriesPurchases;
};