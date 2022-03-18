/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const StreamingStats = sequelize.define(
    'StreamingStats',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      stream_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      is_user: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'streaming_stats',
      timestamps: false,
      underscored: true
    }
  );

  StreamingStats.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return StreamingStats;
};