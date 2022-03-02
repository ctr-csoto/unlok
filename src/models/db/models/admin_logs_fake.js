/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const AdminLogsFake = sequelize.define(
      "AdminLogsFake",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        admin_name: {
          type: DataTypes.STRING,
          allowNull: false,
            unique: true
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        amount: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          defaultValue: 0
        },
        date: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        tableName: "admin_logs_fake",
        timestamps: false,
        underscored: true,
      }
    );
  
    AdminLogsFake.associate = (modelsClass) => {
      const { User } = modelsClass;
      AdminLogsFake.belongsTo(User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      }); 
    };
  
    return AdminLogsFake;
  };
  