/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ImagesRejectedReasons = sequelize.define(
    'ImagesRejectedReasons',
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
      image_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      reason_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      reason_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      admin: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'images_rejected_reasons',
      timestamps: false,
      underscored: true
    }
  );

  ImagesRejectedReasons.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ImagesRejectedReasons.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ImagesRejectedReasons;
};