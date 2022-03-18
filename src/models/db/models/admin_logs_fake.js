/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminLogsFake = sequelize.define(
    'AdminLogsFake',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'admin_logs_fake',
      timestamps: false,
      underscored: true
    }
  );

  AdminLogsFake.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      AdminLogsFake.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return AdminLogsFake;
};