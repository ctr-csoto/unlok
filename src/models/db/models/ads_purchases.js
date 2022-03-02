/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const AdsPurchases = sequelize.define(
      "AdsPurchases",
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
            model: 'users',
            key: 'id'
          }
        },
        ad_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
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
        }
      },
      {
        tableName: "ads_purchases",
        timestamps: false,
        underscored: true,
      }
    );
  
    AdsPurchases.associate = (modelsClass) => {
      const { User, Model, Ads } = modelsClass;
      AdsPurchases.belongsTo(User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      }); 
      Model.belongsTo(User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      }); 
      Ads.belongsTo(User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      }); 
    };
  
    return AdsPurchases;
  };
  