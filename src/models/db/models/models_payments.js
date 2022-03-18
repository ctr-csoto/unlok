/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsPayments = sequelize.define(
    'ModelsPayments',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      period: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.00
      },
      late_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.00
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true
      },
      admin_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      period_from: {
        type: DataTypes.DATE,
        allowNull: true
      },
      period_to: {
        type: DataTypes.DATE,
        allowNull: true
      },
      imported: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'models_payments',
      timestamps: false,
      underscored: true
    }
  );

  ModelsPayments.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsPayments.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelsPayments;
};