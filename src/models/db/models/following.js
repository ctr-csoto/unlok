/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Following = sequelize.define(
    'Following',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      notification: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
    },
    {
      tableName: 'following',
      timestamps: false,
      underscored: true
    }
  );

  Following.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      Following.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      Following.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Following;
};