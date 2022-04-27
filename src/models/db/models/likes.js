/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Likes = sequelize.define(
    'Likes',
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
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      media: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'likes',
      timestamps: false,
      underscored: true
    }
  );

  Likes.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      Likes.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      Likes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Likes;
};