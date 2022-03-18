/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const UsersCopyId = sequelize.define(
    'UsersCopyId',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      money: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_registered: {
        type: DataTypes.DATE,
        allowNull: true
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      pw_hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'en'
      },
      fraud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      freeze: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      email_confirm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ask_before_buy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_follow: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_ads: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      last_ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gallery_known: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      test: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      fake: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      super: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      privileges: {
        type: DataTypes.STRING,
        allowNull: true
      },
      geo_info: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      came_from: {
        type: DataTypes.STRING,
        allowNull: true
      },
      first_failed_login: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      failed_login_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      telegram_chat_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receive_emails: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      receive_telegram: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: '_users_copy_id',
      timestamps: false,
      underscored: true
    }
  );

  UsersCopyId.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return UsersCopyId;
};