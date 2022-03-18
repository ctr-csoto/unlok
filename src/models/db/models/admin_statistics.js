/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminStatistics = sequelize.define(
    'AdminStatistics',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      colour: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'admin_statistics',
      timestamps: false,
      underscored: true
    }
  );

  AdminStatistics.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      AdminStatistics.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return AdminStatistics;
};