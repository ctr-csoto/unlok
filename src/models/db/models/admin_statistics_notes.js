/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminStatisticsNotes = sequelize.define(
    'AdminStatisticsNotes',
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
      note: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      image: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'admin_statistics_notes',
      timestamps: false,
      underscored: true
    }
  );

  AdminStatisticsNotes.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      AdminStatisticsNotes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return AdminStatisticsNotes;
};