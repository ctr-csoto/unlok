/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DynamicPopupsClicks = sequelize.define(
    'DynamicPopupsClicks',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      popup: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'dynamic_popups_clicks',
      timestamps: false,
      underscored: true
    }
  );

  DynamicPopupsClicks.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      DynamicPopupsClicks.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return DynamicPopupsClicks;
};