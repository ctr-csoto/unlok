/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TrackDeletions = sequelize.define(
    'TrackDeletions',
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
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: 'track_deletions',
      timestamps: false,
      underscored: true
    }
  );

  TrackDeletions.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      TrackDeletions.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return TrackDeletions;
};