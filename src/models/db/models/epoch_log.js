/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EpochLog = sequelize.define(
    'EpochLog',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      data: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      server: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      file: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'epoch_log',
      timestamps: false,
      underscored: true
    }
  );

  EpochLog.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EpochLog;
};