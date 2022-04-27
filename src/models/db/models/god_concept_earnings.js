/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GodConceptEarnings = sequelize.define(
    'GodConceptEarnings',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      god_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      earning_table: {
        type: DataTypes.STRING,
        allowNull: true
      },
      earning_table_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      date_refunded: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },
    {
      tableName: 'god_concept_earnings',
      timestamps: false,
      underscored: true
    }
  );

  GodConceptEarnings.associate = (modelsClass) => {
    const { Models, Users } = modelsClass;
           
      GodConceptEarnings.belongsTo(Models, {
        foreignKey: 'god_id',
        constraints: true
      });
     
      GodConceptEarnings.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
     
      GodConceptEarnings.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return GodConceptEarnings;
};