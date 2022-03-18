/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const FluidpayProfile = sequelize.define(
    'FluidpayProfile',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      payerName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerSurname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerEmail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerCountry: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerZipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'fluidpay_profile',
      timestamps: false,
      underscored: true
    }
  );

  FluidpayProfile.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      FluidpayProfile.belongsTo(Users, {
        foreignKey: 'userId',
        constraints: true
      });
  };

  return FluidpayProfile;
};