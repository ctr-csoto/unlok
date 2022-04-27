/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EmailNotificationsUsers = sequelize.define(
    'EmailNotificationsUsers',
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
      new_content: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      new_message: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'email_notifications_users',
      timestamps: false,
      underscored: true
    }
  );

  EmailNotificationsUsers.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      EmailNotificationsUsers.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return EmailNotificationsUsers;
};