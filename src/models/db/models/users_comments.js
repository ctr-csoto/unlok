/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const UsersComments = sequelize.define(
    'UsersComments',
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
      text: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      table: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      row_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'users_comments',
      timestamps: false,
      underscored: true
    }
  );

  UsersComments.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      UsersComments.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return UsersComments;
};