/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const SingleVideoProcessing = sequelize.define(
    'SingleVideoProcessing',
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
      filename: {
        type: DataTypes.STRING,
        allowNull: true
      },
      msg_thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true
      },
      folder_to_upload: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      private: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      unlok_single: {
        type: DataTypes.STRING,
        allowNull: true
      },
      open_thumb: {
        type: DataTypes.STRING,
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
      unlok_plus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      approved: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'single_video_processing',
      timestamps: false,
      underscored: true
    }
  );

  SingleVideoProcessing.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      SingleVideoProcessing.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return SingleVideoProcessing;
};