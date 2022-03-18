/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminScoutersLinksPremium = sequelize.define(
    'AdminScoutersLinksPremium',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      link: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      account: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_answered: {
        type: DataTypes.DATE,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      notes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      offer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sub: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_scouters_links_premium',
      timestamps: false,
      underscored: true
    }
  );

  AdminScoutersLinksPremium.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminScoutersLinksPremium;
};