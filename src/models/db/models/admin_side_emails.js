/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminSideEmails = sequelize.define(
    'AdminSideEmails',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subject_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      subject_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      content_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      content_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receivers: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      scheduled: {
        type: DataTypes.DATE,
        allowNull: true
      },
      attachment_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pending'
      },
      demo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      image_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      image_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      attachment_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      footer_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      footer_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_side_emails',
      timestamps: false,
      underscored: true
    }
  );

  AdminSideEmails.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminSideEmails;
};