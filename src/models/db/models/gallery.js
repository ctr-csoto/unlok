/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Gallery = sequelize.define(
    'Gallery',
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
      filename: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      msg_thumb: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      set_group: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      set_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      video_duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      md5_file: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      stars: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 3.5
      },
      optimized: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      unlok_single: {
        type: DataTypes.STRING,
        allowNull: true
      },
      msg_thumb_new: {
        type: DataTypes.STRING,
        allowNull: true
      },
      filename_new: {
        type: DataTypes.STRING,
        allowNull: true
      },
      video_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      scheduled: {
        type: DataTypes.DATE,
        allowNull: true
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      rejected: {
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
      approved_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      rejected_reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      visible: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      receivers: {
        type: DataTypes.STRING,
        allowNull: true
      },
      promoted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      emails_sent: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'gallery',
      timestamps: false,
      underscored: true
    }
  );

  Gallery.associate = (modelsClass) => {
    const { Models, GalleryPriceHistory, GalleryPurchasedVideosWatermarked, GalleryPurchases } = modelsClass;
           
      Gallery.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Gallery.hasMany(GalleryPriceHistory, {
        foreignKey: {
          name: 'gallery_id',
          allowNull: false
        },
        constraints: true
      });
     
      Gallery.hasMany(GalleryPurchasedVideosWatermarked, {
        foreignKey: {
          name: 'gallery_id',
          allowNull: false
        },
        constraints: true
      });
     
      Gallery.hasMany(GalleryPurchases, {
        foreignKey: {
          name: 'gallery_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Gallery;
};