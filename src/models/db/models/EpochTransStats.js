/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const EpochTransStats = sequelize.define(
    'EpochTransStats',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      ets_transaction_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ets_member_idx: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ets_transaction_date: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ets_transaction_type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ets_co_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ets_pi_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ets_reseller_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 'a'
      },
      ets_transaction_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0.00
      },
      ets_payment_type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'A'
      },
      ets_pst_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ets_username: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ets_password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ets_ref_trans_ids: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ets_password_expire: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ets_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sorted: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'no'
      },
      ets_site_subcat: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      tableName: 'EpochTransStats',
      timestamps: false,
      underscored: true
    }
  );

  EpochTransStats.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return EpochTransStats;
};