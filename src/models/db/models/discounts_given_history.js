/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DiscountsGivenHistory = sequelize.define(
    'DiscountsGivenHistory',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sub_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'discounts_given_history',
      timestamps: false,
      underscored: true
    }
  );

  DiscountsGivenHistory.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      DiscountsGivenHistory.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      DiscountsGivenHistory.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return DiscountsGivenHistory;
};