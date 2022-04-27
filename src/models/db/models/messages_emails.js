/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MessagesEmails = sequelize.define(
    'MessagesEmails',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'messages_emails',
      timestamps: false,
      underscored: true
    }
  );

  MessagesEmails.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return MessagesEmails;
};