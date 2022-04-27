/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Visited = sequelize.define(
    'Visited',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_name: {
        type: DataTypes.STRING,
        allowNull: false
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
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'visited',
      timestamps: false,
      underscored: true
    }
  );

  Visited.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      Visited.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Visited.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return Visited;
};