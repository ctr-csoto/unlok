/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const SubRenewalClicks = sequelize.define(
    'SubRenewalClicks',
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
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'sub_renewal_clicks',
      timestamps: false,
      underscored: true
    }
  );

  SubRenewalClicks.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      SubRenewalClicks.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      SubRenewalClicks.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return SubRenewalClicks;
};