/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const VideoProcessing = sequelize.define(
    'VideoProcessing',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      final_path: {
        type: DataTypes.STRING,
        allowNull: true
      },
      final_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      folder_to_upload: {
        type: DataTypes.STRING,
        allowNull: true
      },
      file_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rand: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      uploadfiletype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      scheduled: {
        type: DataTypes.STRING,
        allowNull: true
      },
      receivers: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'video_processing',
      timestamps: false,
      underscored: true
    }
  );

  VideoProcessing.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      VideoProcessing.belongsTo(Models, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return VideoProcessing;
};