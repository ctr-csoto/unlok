/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const BlacklistedWords = sequelize.define(
    'BlacklistedWords',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      word: {
        type: DataTypes.STRING,
        allowNull: false
      },
      admin_login: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'blacklisted_words',
      timestamps: false,
      underscored: true
    }
  );

  BlacklistedWords.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return BlacklistedWords;
};