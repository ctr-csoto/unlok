/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const AdminSideSelectBoxes = sequelize.define(
    'AdminSideSelectBoxes',
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
      select: {
        type: DataTypes.STRING,
        allowNull: true
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'admin_side_select_boxes',
      timestamps: false,
      underscored: true
    }
  );

  AdminSideSelectBoxes.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      AdminSideSelectBoxes.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return AdminSideSelectBoxes;
};