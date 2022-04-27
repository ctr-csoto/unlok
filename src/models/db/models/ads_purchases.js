/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdsPurchases = sequelize.define(
    'AdsPurchases',
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
      ad_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ads',
          key: 'id'
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
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
    },
    {
      tableName: 'ads_purchases',
      timestamps: false,
      underscored: true
    }
  );

  AdsPurchases.associate = (modelsClass) => {
    const { Users, Models, Ads } = modelsClass;
           
      AdsPurchases.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      AdsPurchases.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      AdsPurchases.belongsTo(Ads, {
        foreignKey: 'ad_id',
        constraints: true
      });
  };

  return AdsPurchases;
};