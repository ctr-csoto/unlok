/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ShoutoutsMessages = sequelize.define(
    'ShoutoutsMessages',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      seen: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      media: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'shoutouts_messages',
      timestamps: false,
      underscored: true
    }
  );

  ShoutoutsMessages.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return ShoutoutsMessages;
};