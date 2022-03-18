/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminSideModelCheckboxes = sequelize.define(
    'AdminSideModelCheckboxes',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      model_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'models',
          key: 'id'
        }
      },
      checkbox_id: {
        type: DataTypes.STRING,
        allowNull: true
      },
      family: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_side_model_checkboxes',
      timestamps: false,
      underscored: true
    }
  );

  AdminSideModelCheckboxes.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      AdminSideModelCheckboxes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return AdminSideModelCheckboxes;
};