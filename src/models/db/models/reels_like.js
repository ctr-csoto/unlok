/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ReelsLike = sequelize.define(
    'ReelsLike',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      reel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'reels',
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
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'reels_like',
      timestamps: false,
      underscored: true
    }
  );

  ReelsLike.associate = (modelsClass) => {
    const { Reels, Users } = modelsClass;
           
      ReelsLike.belongsTo(Reels, {
        foreignKey: 'reel_id',
        constraints: true
      });
     
      ReelsLike.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return ReelsLike;
};