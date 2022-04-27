/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const BlockedChats = sequelize.define(
    'BlockedChats',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'blocked_chats',
      timestamps: false,
      underscored: true
    }
  );

  BlockedChats.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      BlockedChats.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      BlockedChats.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return BlockedChats;
};