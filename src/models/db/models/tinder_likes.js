/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TinderLikes = sequelize.define(
    'TinderLikes',
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
      action: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'tinder_likes',
      timestamps: false,
      underscored: true
    }
  );

  TinderLikes.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      TinderLikes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      TinderLikes.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return TinderLikes;
};