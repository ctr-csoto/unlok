/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Reels = sequelize.define(
    'Reels',
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
      video: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      poster: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      thumb: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      main: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      rejected_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rejected_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      rejected_reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rejected: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'reels',
      timestamps: false,
      underscored: true
    }
  );

  Reels.associate = (modelsClass) => {
    const { Models, ReelsLike } = modelsClass;
           
      Reels.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Reels.hasMany(ReelsLike, {
        foreignKey: {
          name: 'reel_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Reels;
};