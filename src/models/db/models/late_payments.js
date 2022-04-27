/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const LatePayments = sequelize.define(
    'LatePayments',
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
      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      period: {
        type: DataTypes.DATE,
        allowNull: true
      },
      frequency: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'late_payments',
      timestamps: false,
      underscored: true
    }
  );

  LatePayments.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      LatePayments.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return LatePayments;
};