/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Directa24Profile = sequelize.define(
    'Directa24Profile',
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
      payerFirstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerLastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerPhone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerEmail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerDocument: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerDocumentType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerAddress: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerCity: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerState: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payerZipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
    },
    {
      tableName: 'directa24_profile',
      timestamps: false,
      underscored: true
    }
  );

  Directa24Profile.associate = (modelsClass) => {
    const { Users } = modelsClass;
           
      Directa24Profile.belongsTo(Users, {
        foreignKey: 'user_id',
        constraints: true
      });
  };

  return Directa24Profile;
};