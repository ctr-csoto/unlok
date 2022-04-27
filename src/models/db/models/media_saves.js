/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MediaSaves = sequelize.define(
    'MediaSaves',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      model_id: {
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
      media: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'media_saves',
      timestamps: false,
      underscored: true
    }
  );

  MediaSaves.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      MediaSaves.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      MediaSaves.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return MediaSaves;
};