/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Ads = sequelize.define(
    'Ads',
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
      headline: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      description: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      auto_reply: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      main: {
        type: DataTypes.STRING,
        allowNull: true
      },
      main_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      preview: {
        type: DataTypes.STRING,
        allowNull: true
      },
      preview_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      ad_hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      scheduled: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'ads',
      timestamps: false,
      underscored: true
    }
  );

  Ads.associate = (modelsClass) => {
    const { Models, AdsPurchases } = modelsClass;
           
      Ads.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      Ads.hasMany(AdsPurchases, {
        foreignKey: {
          name: 'ad_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Ads;
};