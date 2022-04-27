/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const UsersCookiesTracking = sequelize.define(
    'UsersCookiesTracking',
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
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      times_visited: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      first_visit: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_registered: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'users_cookies_tracking',
      timestamps: false,
      underscored: true
    }
  );

  UsersCookiesTracking.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      UsersCookiesTracking.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      UsersCookiesTracking.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return UsersCookiesTracking;
};