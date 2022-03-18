/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const WarningsHistory = sequelize.define(
    'WarningsHistory',
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
      word: {
        type: DataTypes.STRING,
        allowNull: true
      },
      action: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'warnings_history',
      timestamps: false,
      underscored: true
    }
  );

  WarningsHistory.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      WarningsHistory.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      WarningsHistory.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return WarningsHistory;
};