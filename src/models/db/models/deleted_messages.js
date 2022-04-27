/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const DeletedMessages = sequelize.define(
    'DeletedMessages',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      msg_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user_messages',
          key: 'id_comment'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'deleted_messages',
      timestamps: false,
      underscored: true
    }
  );

  DeletedMessages.associate = (modelsClass) => {
    const { Users, UserMessages } = modelsClass;
           
      DeletedMessages.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      DeletedMessages.belongsTo(UserMessages, {
        foreignKey: 'msg_id',
        constraints: true
      });
  };

  return DeletedMessages;
};