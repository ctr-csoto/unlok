/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const GodConceptUsers = sequelize.define(
    'GodConceptUsers',
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
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      god_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'god_concept_users',
      timestamps: false,
      underscored: true
    }
  );

  GodConceptUsers.associate = (modelsClass) => {
    const { Users, Models } = modelsClass;
           
      GodConceptUsers.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
     
      GodConceptUsers.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return GodConceptUsers;
};