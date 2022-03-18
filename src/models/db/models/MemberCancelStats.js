/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const MemberCancelStats = sequelize.define(
    'MemberCancelStats',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      mcs_or_idx: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mcs_canceldate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      mcs_signupdate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      mcs_cocode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mcs_picode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mcs_reseller: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mcs_reason: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mcs_memberstype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mcs_username: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mcs_email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      mcs_passwordremovaldate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      sorted: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'no'
      },
    },
    {
      tableName: 'MemberCancelStats',
      timestamps: false,
      underscored: true
    }
  );

  MemberCancelStats.associate = (modelsClass) => {
    const {  } = modelsClass;
      
  };

  return MemberCancelStats;
};