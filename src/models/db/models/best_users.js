/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const BestUsers = sequelize.define(
    'BestUsers',
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
      date_generated: {
        type: DataTypes.DATE,
        allowNull: true
      },
      hash: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'best_users',
      timestamps: false,
      underscored: true
    }
  );

  BestUsers.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return BestUsers;
};