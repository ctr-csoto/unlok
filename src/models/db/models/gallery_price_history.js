/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GalleryPriceHistory = sequelize.define(
    'GalleryPriceHistory',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      gallery_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'gallery',
          key: 'id'
        }
      },
      old_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      new_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'gallery_price_history',
      timestamps: false,
      underscored: true
    }
  );

  GalleryPriceHistory.associate = (modelsClass) => {
    const { Gallery } = modelsClass;
           
      GalleryPriceHistory.belongsTo(Gallery, {
        foreignKey: 'gallery_id',
        constraints: true
      });
  };

  return GalleryPriceHistory;
};