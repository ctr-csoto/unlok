/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminAnsweredPictures = sequelize.define(
    'AdminAnsweredPictures',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      link_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      filename: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'admin_answered_pictures',
      timestamps: false,
      underscored: true
    }
  );

  AdminAnsweredPictures.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return AdminAnsweredPictures;
};