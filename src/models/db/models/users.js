/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
                unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      money: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date_registered: {
        type: DataTypes.DATE,
        allowNull: true
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      pw_hash: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lang: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'en'
      },
      fraud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      freeze: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      email_confirm: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      ask_before_buy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_follow: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      ask_to_ads: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      last_ip: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gallery_known: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      test: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      fake: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      super: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      privileges: {
        type: DataTypes.STRING,
        allowNull: true
      },
      geo_info: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      came_from: {
        type: DataTypes.STRING,
        allowNull: true
      },
      first_failed_login: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      failed_login_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      telegram_chat_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      receive_emails: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1
      },
      receive_telegram: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true
    }
  );

  Users.associate = (modelsClass) => {
    const { AdminLogsFake, AdsPurchases, ApiCancelations, BlockedChats, CreditsLogs, DeletedMessages, Directa24Notifications, Directa24Profile, Directa24Request, DiscountVouchers, DiscountVouchersCredits, DiscountsGivenHistory, DynamicPopupsClicks, EmailNotificationsUsers, EmailValidation, FluidpayProfile, Following, GalleryPurchasedVideosWatermarked, GalleryPurchases, GodConceptEarnings, GodConceptUsers, Likes, LoginTimesLogs, MediaSaves, ModelReferralEarnings, NotificationsModels, NotificationsUsers, PasswordRequests, ReelsLike, StoriesPurchases, Streaming, StreamingEmailReminders, StreamingPurchases, SubRenewalClicks, SuspiciousApi, TestSubscribtions, TinderLikes, Tips, TrackingEmailsPurchases, TrackingRecommended, UserMessages, UsersComments, UsersCookiesTracking, UsersIpLogs, ValentineDay, Visited, WarningsHistory } = modelsClass;
           
      Users.hasMany(AdminLogsFake, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(AdsPurchases, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(ApiCancelations, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(BlockedChats, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(CreditsLogs, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(DeletedMessages, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Directa24Notifications, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Directa24Profile, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Directa24Request, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(DiscountVouchers, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(DiscountVouchersCredits, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(DiscountsGivenHistory, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(DynamicPopupsClicks, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(EmailNotificationsUsers, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(EmailValidation, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(FluidpayProfile, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Following, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(GalleryPurchasedVideosWatermarked, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(GalleryPurchases, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(GodConceptEarnings, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(GodConceptUsers, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Likes, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(LoginTimesLogs, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(MediaSaves, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(ModelReferralEarnings, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(NotificationsModels, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(NotificationsUsers, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(PasswordRequests, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(ReelsLike, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(StoriesPurchases, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Streaming, {
        foreignKey: {
          name: 'private_user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(StreamingEmailReminders, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(StreamingPurchases, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(SubRenewalClicks, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(SuspiciousApi, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(TestSubscribtions, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(TinderLikes, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Tips, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(TrackingEmailsPurchases, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(TrackingRecommended, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(UserMessages, {
        foreignKey: {
          name: 'user_msg_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(UsersComments, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(UsersCookiesTracking, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(UsersIpLogs, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(ValentineDay, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(Visited, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
     
      Users.hasMany(WarningsHistory, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        constraints: true
      });
  };

  return Users;
};