/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Wiki = sequelize.define(
    'Wiki',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      question_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      question_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      answer_en: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      answer_es: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      target: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'wiki',
      timestamps: false,
      underscored: true
    }
  );

  Wiki.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return Wiki;
};