/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const TestSubscribtionsOld = sequelize.define(
    'TestSubscribtionsOld',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sub_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true
      },
      die: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      emergency: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fix: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      init_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'test_subscribtions_old',
      timestamps: false,
      underscored: true
    }
  );

  TestSubscribtionsOld.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return TestSubscribtionsOld;
};