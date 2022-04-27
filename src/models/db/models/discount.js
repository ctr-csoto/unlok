/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Discount = sequelize.define(
    'Discount',
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
      discount: {
        type: DataTypes.STRING,
        allowNull: true
      },
      valid_from: {
        type: DataTypes.DATE,
        allowNull: true
      },
      valid_till: {
        type: DataTypes.DATE,
        allowNull: true
      },
      offer_limit: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      apply_new: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      apply_expired: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      stop: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'discount',
      timestamps: false,
      underscored: true
    }
  );

  Discount.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      Discount.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Discount;
};