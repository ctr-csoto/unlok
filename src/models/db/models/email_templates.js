/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EmailTemplates = sequelize.define(
    'EmailTemplates',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      cases: {
        type: DataTypes.STRING,
        allowNull: true
      },
      template: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      template_sp: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'email_templates',
      timestamps: false,
      underscored: true
    }
  );

  EmailTemplates.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EmailTemplates;
};