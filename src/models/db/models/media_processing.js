/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MediaProcessing = sequelize.define(
    'MediaProcessing',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      created: {
        type: DataTypes.DATE,
        allowNull: true
      },
      filename: {
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
      privacy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      stars: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      video_poster: {
        type: DataTypes.STRING,
        allowNull: true
      },
      new_filename: {
        type: DataTypes.STRING,
        allowNull: true
      },
      segments: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      set_group: {
        type: DataTypes.STRING,
        allowNull: true
      },
      set_order: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      scheduled: {
        type: DataTypes.DATE,
        allowNull: true
      },
      free: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      rejected: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      rejected_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rejected_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      approved_by: {
        type: DataTypes.STRING,
        allowNull: true
      },
      approved_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      rejected_reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      file_key: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'media_processing',
      timestamps: false,
      underscored: true
    }
  );

  MediaProcessing.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      MediaProcessing.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return MediaProcessing;
};