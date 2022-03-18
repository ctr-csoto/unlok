/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MultipleVideoProcessing = sequelize.define(
    'MultipleVideoProcessing',
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
      filename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      msg_thumb: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      set_group: {
        type: DataTypes.STRING,
        allowNull: false
      },
      set_order: {
        type: DataTypes.STRING,
        allowNull: false
      },
      folder_to_upload: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      private: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
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
      rejected_reason: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'multiple_video_processing',
      timestamps: false,
      underscored: true
    }
  );

  MultipleVideoProcessing.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      MultipleVideoProcessing.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return MultipleVideoProcessing;
};