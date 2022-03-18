/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const WarningEmails = sequelize.define(
    'WarningEmails',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pending'
      },
    },
    {
      tableName: 'warning_emails',
      timestamps: false,
      underscored: true
    }
  );

  WarningEmails.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      WarningEmails.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return WarningEmails;
};