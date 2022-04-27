/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const PaymentException = sequelize.define(
    'PaymentException',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      period: {
        type: DataTypes.STRING,
        allowNull: true
      },
      model: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'payment_exception',
      timestamps: false,
      underscored: true
    }
  );

  PaymentException.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      PaymentException.belongsTo(Models, {
        foreignKey: 'model',
        constraints: true
      });
  };

  return PaymentException;
};