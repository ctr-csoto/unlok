/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const FluidpayRequest = sequelize.define(
    'FluidpayRequest',
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
        type: DataTypes.STRING,
        allowNull: true
      },
      model_id: {
        type: DataTypes.STRING,
        allowNull: true
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
        type: DataTypes.INTEGER,
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
      tableName: 'fluidpay_request',
      timestamps: false,
      underscored: true
    }
  );

  FluidpayRequest.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return FluidpayRequest;
};