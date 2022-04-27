/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const UserMessagesArchive = sequelize.define(
    'UserMessagesArchive',
    {
      
      id_comment: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      to_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'unread',
        values: ['unread', 'read']
      },
      date_posted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: new Date()
      },
      picture: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      file_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      imgPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      purchased: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      msg_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      skip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      seen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      fraud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      promoted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      date_purchased: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      multiple: {
        type: DataTypes.STRING,
        allowNull: true
      },
      model_msg_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_msg_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      unlok_plus: {
        type: DataTypes.STRING,
        allowNull: true
      },
      unlok_single: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ad_title: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      open_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
      promote_text: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      story_reaction: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      stream_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      msg_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      stream_invitation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      reminders: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      reminded_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      story_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      u_sold: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      u_sold_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      rejected: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      rejected_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rejected_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      approved_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      tip_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rejected_reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      tinder: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      hidden: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'user_messages_archive',
      timestamps: false,
      underscored: true
    }
  );

  UserMessagesArchive.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return UserMessagesArchive;
};