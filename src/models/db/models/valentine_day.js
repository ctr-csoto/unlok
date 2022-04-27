/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ValentineDay = sequelize.define(
    'ValentineDay',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'valentine_day',
      timestamps: false,
      underscored: true
    }
  );

  ValentineDay.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      ValentineDay.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return ValentineDay;
};