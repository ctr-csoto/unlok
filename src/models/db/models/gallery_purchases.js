/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GalleryPurchases = sequelize.define(
    'GalleryPurchases',
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
      gallery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'gallery',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: new Date()
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      processing: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'none'
      },
    },
    {
      tableName: 'gallery_purchases',
      timestamps: false,
      underscored: true
    }
  );

  GalleryPurchases.associate = (modelsClass) => {
    const { Users, Models, Gallery } = modelsClass;
           
      GalleryPurchases.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      GalleryPurchases.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      GalleryPurchases.belongsTo(Gallery, {
        foreignKey: 'gallery_id',
        constraints: true
      });
  };

  return GalleryPurchases;
};