/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const CronModelEarningsNew = sequelize.define(
    'CronModelEarningsNew',
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
      date: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      tips: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      subs: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      media: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      vip: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      ads: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      stream: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      mother: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      hide: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      referral: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
      },
    },
    {
      tableName: 'cron_model_earnings_new',
      timestamps: false,
      underscored: true
    }
  );

  CronModelEarningsNew.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      CronModelEarningsNew.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return CronModelEarningsNew;
};