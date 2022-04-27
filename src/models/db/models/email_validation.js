/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EmailValidation = sequelize.define(
    'EmailValidation',
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
      email: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'email_validation',
      timestamps: false,
      underscored: true
    }
  );

  EmailValidation.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      EmailValidation.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return EmailValidation;
};