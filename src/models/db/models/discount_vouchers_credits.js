/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DiscountVouchersCredits = sequelize.define(
    'DiscountVouchersCredits',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      voucher: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true,
                unique: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_used: {
        type: DataTypes.DATE,
        allowNull: true
      },
      active_users: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'discount_vouchers_credits',
      timestamps: false,
      underscored: true
    }
  );

  DiscountVouchersCredits.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      DiscountVouchersCredits.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return DiscountVouchersCredits;
};