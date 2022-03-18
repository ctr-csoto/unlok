/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const WatermarkVideos = sequelize.define(
    'WatermarkVideos',
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
      video_path: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
    },
    {
      tableName: 'watermark_videos',
      timestamps: false,
      underscored: true
    }
  );

  WatermarkVideos.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      WatermarkVideos.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return WatermarkVideos;
};