/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Referrals = sequelize.define(
    'Referrals',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pw_hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date_registered: {
        type: DataTypes.DATE,
        allowNull: false
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      epercentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'en'
      },
      email_confirm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: true
      },
      documents_submitted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      agency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      last_ip: {
        type: DataTypes.STRING,
        allowNull: true
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
      bank_account: {
        type: DataTypes.STRING,
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
      bank_type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      new_blacklisted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      document: {
        type: DataTypes.STRING,
        allowNull: true
      },
      issued_year: {
        type: DataTypes.STRING,
        allowNull: true
      },
      issued_month: {
        type: DataTypes.STRING,
        allowNull: true
      },
      expiration_year: {
        type: DataTypes.STRING,
        allowNull: true
      },
      expiration_month: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birth_day: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birth_month: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birth_year: {
        type: DataTypes.STRING,
        allowNull: true
      },
      form_upload: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      form_valid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      privileges: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    },
    {
      tableName: 'referrals',
      timestamps: false,
      underscored: true
    }
  );

  Referrals.associate = (modelsClass) => {
    const { ModelReferralEarnings, ReferralsHiddenModels, ReferralsSettings } = modelsClass;
           
      Referrals.hasMany(ModelReferralEarnings, {
        foreignKey: {
          name: 'ref_id',
          allowNull: false
        },
        constraints: true
      });
     
      Referrals.hasMany(ReferralsHiddenModels, {
        foreignKey: {
          name: 'ref_id',
          allowNull: false
        },
        constraints: true
      });
     
      Referrals.hasMany(ReferralsSettings, {
        foreignKey: {
          name: 'referral_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Referrals;
};