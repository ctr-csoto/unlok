/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MostRecentNotes = sequelize.define(
    'MostRecentNotes',
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
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'most_recent_notes',
      timestamps: false,
      underscored: true
    }
  );

  MostRecentNotes.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      MostRecentNotes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return MostRecentNotes;
};