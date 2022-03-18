/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Directa24Request = sequelize.define(
    'Directa24Request',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      deposit_id: {
        type: DataTypes.INTEGER,
        allowNull: true
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
      credit_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      credit_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sub_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      duration_months: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'credit'
      },
      response: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      voucher: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'directa24_request',
      timestamps: false,
      underscored: true
    }
  );

  Directa24Request.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      Directa24Request.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      Directa24Request.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Directa24Request;
};