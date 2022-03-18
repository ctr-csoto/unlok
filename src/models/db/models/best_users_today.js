/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const BestUsersToday = sequelize.define(
    'BestUsersToday',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subs: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      gallery: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      tips: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      messages: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'best_users_today',
      timestamps: false,
      underscored: true
    }
  );

  BestUsersToday.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return BestUsersToday;
};