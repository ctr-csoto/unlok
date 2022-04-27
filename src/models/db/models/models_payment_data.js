/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const ModelsPaymentData = sequelize.define(
    'ModelsPaymentData',
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
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true
      },
      payment_field: {
        type: DataTypes.STRING,
        allowNull: true
      },
      frequency: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_account: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_swift: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bank_country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_firstname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_lastname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_mlastname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_zip_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_department: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      document: {
        type: DataTypes.STRING,
        allowNull: true
      },
      issued_year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      issued_month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      expiration_year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      expiration_month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      birth_year: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      birth_month: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      birth_day: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zelle_owner: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zelle_phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_document_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_phone_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_routing_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_branch: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_institute: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bank_clabe: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'models_payment_data',
      timestamps: false,
      underscored: true
    }
  );

  ModelsPaymentData.associate = (modelsClass) => {
    const { Models } = modelsClass;
           
      ModelsPaymentData.belongsTo(Models, {
        foreignKey: 'model_id',
        constraints: true
      });
  };

  return ModelsPaymentData;
};