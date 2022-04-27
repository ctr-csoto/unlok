/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Directa24Refund = sequelize.define(
    'Directa24Refund',
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
      refund_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
                unique: true
      },
      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      response: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'directa24_refund',
      timestamps: false,
      underscored: true
    }
  );

  Directa24Refund.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return Directa24Refund;
};