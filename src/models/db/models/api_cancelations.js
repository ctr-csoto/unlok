/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ApiCancelations = sequelize.define(
    'ApiCancelations',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sub_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      admin: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'api_cancelations',
      timestamps: false,
      underscored: true
    }
  );

  ApiCancelations.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      ApiCancelations.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return ApiCancelations;
};