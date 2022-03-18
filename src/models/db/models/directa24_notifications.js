/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Directa24Notifications = sequelize.define(
    'Directa24Notifications',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      deposit_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
                unique: true
      },
      amount: {
        type: DataTypes.DECIMAL(10,2),
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
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      response: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      notification: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'directa24_notifications',
      timestamps: false,
      underscored: true
    }
  );

  Directa24Notifications.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      Directa24Notifications.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return Directa24Notifications;
};