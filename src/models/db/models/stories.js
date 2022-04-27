/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Stories = sequelize.define(
    'Stories',
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
      story: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      video_poster: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      privacy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      segments: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      approved: {
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
      rejected: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'stories',
      timestamps: false,
      underscored: true
    }
  );

  Stories.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      Stories.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return Stories;
};