/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GalleryPurchasedVideosWatermarked = sequelize.define(
    'GalleryPurchasedVideosWatermarked',
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
      gallery_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'gallery',
          key: 'id'
        }
      },
      filename: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      video_thumb: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'gallery_purchased_videos_watermarked',
      timestamps: false,
      underscored: true
    }
  );

  GalleryPurchasedVideosWatermarked.associate = (modelsClass) => {
    const { Users, Models, Gallery } = modelsClass;
           
      GalleryPurchasedVideosWatermarked.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      GalleryPurchasedVideosWatermarked.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      GalleryPurchasedVideosWatermarked.belongsTo(Gallery, {
        foreignKey: 'gallery_id',
        constraints: true
      });
  };

  return GalleryPurchasedVideosWatermarked;
};