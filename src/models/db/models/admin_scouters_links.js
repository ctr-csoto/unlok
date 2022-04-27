/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminScoutersLinks = sequelize.define(
    'AdminScoutersLinks',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      account: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date_answered: {
        type: DataTypes.DATE,
        allowNull: true
      },
      week_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      notes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      admin_answer: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      closer_taken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: true
      },
      repeats: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      image: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sub: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      box: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      transfer_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'admin_scouters_links',
      timestamps: false,
      underscored: true
    }
  );

  AdminScoutersLinks.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminScoutersLinks;
};