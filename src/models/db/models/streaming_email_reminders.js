/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const StreamingEmailReminders = sequelize.define(
    'StreamingEmailReminders',
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
      stream_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'streaming',
          key: 'id'
        }
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'streaming_email_reminders',
      timestamps: false,
      underscored: true
    }
  );

  StreamingEmailReminders.associate = (modelsClass) => {
    const { Users, Streaming } = modelsClass;
           
      StreamingEmailReminders.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      StreamingEmailReminders.belongsTo(Streaming, {
        foreignKey: 'stream_id',
        constraints: true
      });
  };

  return StreamingEmailReminders;
};